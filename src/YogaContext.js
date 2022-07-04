import { useState, createContext } from "react";


const YogaContext = createContext();

let interval;

export const YogaProvider = ({ children }) => {
  const [startingTime, setStartingTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [poseTime, setPoseTime] = useState(0);
  const [bestPerform, setBestPerform] = useState(0);
  const [currentPose, setCurrentPose] = useState("Tree");
  const [isStartPose, setIsStartPose] = useState(false);

  const startYoga = (value) =>{
    setIsStartPose(value);
  }

  function stopPose() {
    setIsStartPose(false);
    clearInterval(interval);
  }

  const startingTimefunc = (start_time)=>{
    setStartingTime(start_time);
  }

  const currentTimefunc = (current_time)=>{
    setCurrentTime(current_time);
  }

  const poseTimefunc = (pose_time)=>{
    setPoseTime(pose_time);
  }

  const bestPerformfunc = (best_time)=>{
    setBestPerform(best_time);
  }
 
  const setCurrentPosefunc = (pose) => {
    setCurrentPose(pose);
  }

  return (
    <YogaContext.Provider
      value={{
        startYoga,
        stopPose,
        startingTimefunc,
        currentTimefunc,
        poseTimefunc,
        bestPerformfunc,
        setCurrentPosefunc,
        startingTime,
        currentTime,
        poseTime,
        bestPerform,
        currentPose,
        isStartPose,
      }}
    >
      {children}
    </YogaContext.Provider>
  );
};

export default YogaContext;