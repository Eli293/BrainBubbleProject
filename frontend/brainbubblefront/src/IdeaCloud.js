import {useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Combobox from "react-widgets/Combobox";
import Idea from './components/Idea';
import Draggable from 'react-draggable'
import 'bootstrap/dist/css/bootstrap.min.css';


let id = 2;
function IdeaCloud()
{
    const initialCloudWall = [{id: 1, desc:'Random Idea', type:'Cloud', clicked:false}]; //get request to backend

    const [idea, setIdea] = useState(initialCloudWall);


    const toggleDelete = (id) =>{
        const idea2 = idea.map((item)=>{
            if(item.id !== id){
              return item;
            }
            else{
              return{...item, clicked: !item.clicked};
            }
          });
          setIdea(idea2);
    }
    const [desc, setDesc] = useState("");
    const [type, setType] = useState("Cloud");

    const deleteIdea = (id)=>
    {
        //delete request
        const cloudwall = [...idea];
        const newcloudwall = cloudwall.filter(item => item.id !== id);
        setIdea(newcloudwall);
        setType("None");
    }


    const addIdea = (desc, type)=>
    {
        //post request
        const newcloudwall = [{id:id, desc:desc, type:type, clicked:false}]
        setIdea(newcloudwall);
        id++;
        toast.success("A new Idea has appeared!", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const doTypeChange=(event)=>{
        setType(event.currentTarget.value);
    }
    const doDescChange=(event)=>{
        setDesc(event.currentTarget.value);
    }

    const ideaCreation=(event)=>{
        event.preventDefault();
        addIdea(desc,type);
        setDesc("");
    }


    
}

export default IdeaCloud;