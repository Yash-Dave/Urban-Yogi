import * as poseDetection from "@tensorflow-models/pose-detection";
import * as tf from "@tensorflow/tfjs";
import { useRef, useEffect, useContext } from "react";
import YogaContext from "../../YogaContext";
import { poseImages } from "../../utils/pose_images";
import { POINTS, keypointConnections } from "../../utils/data";
import { drawPoint, drawSegment } from "../../utils/helper";
import Webcam from "react-webcam";
import { count } from "../../utils/music";
import { Link } from "react-router-dom";
import "./Yoga.css";
import "./YogaCanvas.css";

// flag variable is used to help capture the time when AI just detect
// the pose as correct(probability more than threshold)
let flag = false;
let skeletonColor = "rgb(255,0,0)";

// eslint-disable-next-line 
let interval;

function YogaCanvas() {
  const {
    stopPose,
    isStartPose,
    startingTime,
    startingTimefunc,
    currentTime,
    currentTimefunc,
    poseTime,
    poseTimefunc,
    bestPerform,
    bestPerformfunc,
    currentPose,
  } = useContext(YogaContext);

  useEffect(() => {
    const timeDiff = (currentTime - startingTime) / 1000;
    if (flag) {
      poseTimefunc(timeDiff);
    }
    if ((currentTime - startingTime) / 1000 > bestPerform) {
      bestPerformfunc(timeDiff);
    }
  }, 
  // eslint-disable-next-line 
  [currentTime]);

  useEffect(() => {
    currentTimefunc(0);
    poseTimefunc(0);
    bestPerformfunc(0);
  },
 // eslint-disable-next-line 
  [currentPose]);

  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const CLASS_NO = {
    Chair: 0,
    Cobra: 1,
    Dog: 2,
    No_Pose: 3,
    Shoulderstand: 4,
    Traingle: 5,
    Tree: 6,
    Warrior: 7,
  };

  function get_center_point(landmarks, left_bodypart, right_bodypart) {
    let left = tf.gather(landmarks, left_bodypart, 1);
    let right = tf.gather(landmarks, right_bodypart, 1);
    const center = tf.add(tf.mul(left, 0.5), tf.mul(right, 0.5));
    return center;
  }

  function get_pose_size(landmarks, torso_size_multiplier = 2.5) {
    let hips_center = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    let shoulders_center = get_center_point(
      landmarks,
      POINTS.LEFT_SHOULDER,
      POINTS.RIGHT_SHOULDER
    );
    let torso_size = tf.norm(tf.sub(shoulders_center, hips_center));
    let pose_center_new = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    pose_center_new = tf.expandDims(pose_center_new, 1);

    pose_center_new = tf.broadcastTo(pose_center_new, [1, 17, 2]);
    // return: shape(17,2)
    let d = tf.gather(tf.sub(landmarks, pose_center_new), 0, 0);
    let max_dist = tf.max(tf.norm(d, "euclidean", 0));

    // normalize scale
    let pose_size = tf.maximum(
      tf.mul(torso_size, torso_size_multiplier),
      max_dist
    );
    return pose_size;
  }

  function normalize_pose_landmarks(landmarks) {
    let pose_center = get_center_point(
      landmarks,
      POINTS.LEFT_HIP,
      POINTS.RIGHT_HIP
    );
    pose_center = tf.expandDims(pose_center, 1);
    pose_center = tf.broadcastTo(pose_center, [1, 17, 2]);
    landmarks = tf.sub(landmarks, pose_center);

    let pose_size = get_pose_size(landmarks);
    landmarks = tf.div(landmarks, pose_size);
    return landmarks;
  }

  function landmarks_to_embedding(landmarks) {
    // normalize landmarks 2D
    landmarks = normalize_pose_landmarks(tf.expandDims(landmarks, 0));
    let embedding = tf.reshape(landmarks, [1, 34]);
    return embedding;
  }

  const runMovenet = async () => {
    const detectorConfig = {
      modelType: poseDetection.movenet.modelType.SINGLEPOSE_THUNDER,
    };
    const detector = await poseDetection.createDetector(
      poseDetection.SupportedModels.MoveNet,
      detectorConfig
    );
    const poseClassifier = await tf.loadLayersModel(
      "https://models.s3.jp-tok.cloud-object-storage.appdomain.cloud/model.json"
      // model
    );
    const countAudio = new Audio(count);
    countAudio.loop = true;
    interval = setInterval(() => {
      detectPose(detector, poseClassifier, countAudio);
    }, 100);
  };

  const detectPose = async (detector, poseClassifier, countAudio) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      let notDetected = 0;
      const video = webcamRef.current.video;
      const pose = await detector.estimatePoses(video);
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      try {
        const keypoints = pose[0].keypoints;
        let input = keypoints.map((keypoint) => {
          if (keypoint.score > 0.4) {
            if (
              !(keypoint.name === "left_eye" || keypoint.name === "right_eye")
            ) {
              drawPoint(ctx, keypoint.x, keypoint.y, 8, "rgb(255,255,255)");
              let connections = keypointConnections[keypoint.name];
              try {
                connections.forEach((connection) => {
                  let conName = connection.toUpperCase();
                  drawSegment(
                    ctx,
                    [keypoint.x, keypoint.y],
                    [
                      keypoints[POINTS[conName]].x,
                      keypoints[POINTS[conName]].y,
                    ],
                    skeletonColor
                  );
                });
              } catch (err) {}
            }
          } else {
            notDetected += 1;
          }
          return [keypoint.x, keypoint.y];
        });
        if (notDetected > 4) {
          skeletonColor = "rgb(255,0,0)";
          return;
        }
        const processedInput = landmarks_to_embedding(input);
        const classification = poseClassifier.predict(processedInput);

        classification.array().then((data) => {
          const classNo = CLASS_NO[currentPose];
          console.log(data[0][classNo]);
          if (data[0][classNo] > 0.97) {
            if (!flag) {
              countAudio.play();
              startingTimefunc(new Date(Date()).getTime());
              flag = true;
            }
            currentTimefunc(new Date(Date()).getTime());
            skeletonColor = "rgb(0,255,0)";
          } else {
            flag = false;
            skeletonColor = "rgb(255,0,0)";
            countAudio.pause();
            countAudio.currentTime = 0;
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const width = window.screen.width;

  if (isStartPose) {
    runMovenet();
    return (
      <div className="yoga-pose-container">
        <div className="performance-container">
          <div className="pose-performance">
            <h4>Pose Time: {poseTime} s</h4>
          </div>
          <div className="pose-performance">
            <h4>Best: {bestPerform} s</h4>
          </div>
          <button onClick={stopPose} className="secondary-btn">
            <Link to="/start">Stop Pose</Link>
          </button>
        </div>
        <div className="pose-detection">
          <div className="detection-container">
            <Webcam
              width={width >= 480 ? "640px" : "360px"}
              height={width >= 480 ? "480px" : "270px"}
              id="webcam"
              className="webcam"
              ref={webcamRef}
            />
            <canvas
              ref={canvasRef}
              id="my-canvas"
              className="my-canvas"
              width={width >= 480 ? "640px" : "360px"}
              height={width >= 480 ? "480px" : "270px"}
            ></canvas>
          </div>

          <div className="pose-img" >
            <img src={poseImages[currentPose]} alt="poses"/>
          </div>
        </div>
      </div>
    );
  }
}

export default YogaCanvas;
