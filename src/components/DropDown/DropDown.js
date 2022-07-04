import {useContext} from 'react'
import YogaContext from "../../YogaContext";
import { poseImages } from '../../utils/pose_images'

import './DropDown.css'

export default function DropDown({ poseList }) {

    const {currentPose,setCurrentPosefunc} = useContext(YogaContext);

return (
        <div
        className='dropdown dropdown-container'
         
      >
        <button 
            className="btn btn-secondary dropdown-toggle"
            type='button'
            data-bs-toggle="dropdown"
            id="pose-dropdown-btn"
            aria-expanded="false"
        >{currentPose}
        </button>
        <ul class="dropdown-menu dropdown-custom-menu" aria-labelledby="dropdownMenuButton1">
            {poseList.map((pose) => (
                <li onClick={() => setCurrentPosefunc(pose)}>
                    <div class="dropdown-item-container">
                        <p className="dropdown-item-1">{pose}</p>
                        <img 
                            src={poseImages[pose]}
                            className="dropdown-img"
                            alt="yoga_images"
                        />
                        
                    </div>
                </li>
            ))}
            
        </ul>
              
          
      </div>
    )
}
 