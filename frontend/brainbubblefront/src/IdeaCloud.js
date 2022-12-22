import React from "react";
import {useDrag} from 'react-dnd'
import {ItemTypes} from './Constants'

function IdeaCloud({type}){

    if(type == "Square"){
        const [{isDragging}, drag, dragPreview] = useDrag(() => ({
            type:'BOX',
            collect: (monitor) => ({
                isDragging: monitor.isDragging()
            })
        }))
    }
}