import React from "react";
import {useDrag} from 'react-dnd'
import {ItemTypes} from './Constants'

function IdeaCloud({type}){

    if(type == "Square"){
        
    }
    else if(type == "Circle"){
        const [{isDragging}, drag, dragPreview] = useDrag(() => ({
            type:'BOX',
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }))
    }
}
export default IdeaCloud;