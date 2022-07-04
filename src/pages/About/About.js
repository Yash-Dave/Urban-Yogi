import React from 'react'

import './About.css'

export default function About() {
    return (
        
                       
        
        <div className="about-container">

            

            
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    Yoga has been the way of life for centuries. By building Urban Yogi we have built a Yoga trainer website where learners can select the pose that they intend to do and then our unique pose detection and pose correction software shall help them navigate their learning experience.
                    This is an open source project by a bunch of third year students.
                </p>
                <p className="about-content">
                    This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). We have used Tensorflow pretrained Movenet Model To Predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

                    We have trained the model in python because of tensorflowJS we can leverage the support of browser so I converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
                {/* <div className="developer-info">
                    <h4>About Developer</h4>
                    <p className="about-content">I am Harsh, I am Full Stack Developer, AI Enthusiastic, Content Creator, Tutor,
                        I love to work with technology and love to share on my youtube channel, 
                        I hope this project will help you. 
                    </p>
                    <h4>Contact</h4>
                    <a href="https://www.instagram.com/codedharsh75/"><p className="about-content">Instagram</p></a>
                    <a href="https://www.youtube.com/channel/UCiD7kslR7lKSaPGSQ-heOWg"><p  className="about-content">Youtube</p></a>
                    <a href="https://github.com/harshbhatt7585"><p  className="about-content">GitHub</p></a>
                </div> */}
            </div>
        </div>
    )
}
