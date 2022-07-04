import React, {useContext } from 'react'
import YogaContext from "../../YogaContext";
import { poseInstructions } from '../../utils/data'

import { poseImages } from '../../utils/pose_images'

import './Instructions.css'

export default function Instructions() {

    const {currentPose} = useContext(YogaContext);

    return (
        <div className="instructions-container">
            <ol className="instructions-list">
                {poseInstructions[currentPose].map((instruction) => {
                    return(
                        <li className="instruction">{instruction}</li>
                    )
                    
                })}
            </ol>
            <img 
                className="pose-demo-img"
                src={poseImages[currentPose]}
                alt="pose_images"
            />
        </div>
    )
}
