import React from "react";
import {useDrag} from 'react-dnd'
import {ItemTypes} from './Constants'

function IdeaCloud(desc,type){

    return(
        <div>
        <Draggable defaultPosition={{x: 0, y: 0}}>
        <div className={type}>
            <div className='content'>
                 {idea.map((item)=>(

                    <Idea id={item.id} item={item.desc} deleteIdea={deleteIdea} clicked={item.clicked} toggleDelete={toggleDelete}></Idea>

                  ))} 
            </div>
        </div>
        </Draggable>
        </div>
    )
    
}
export default IdeaCloud;