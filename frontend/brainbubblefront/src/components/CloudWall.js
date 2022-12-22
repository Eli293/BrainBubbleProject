import {useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Combobox from "react-widgets/Combobox";
import Idea from './Idea';
import Draggable from 'react-draggable'
import IdeaCreator  from '../IdeaCreator';
import 'bootstrap/dist/css/bootstrap.min.css';
import IdeaCloud from '../IdeaCloud';


let id = 2;
function CloudWall()
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
        <IdeaCloud desc={desc} type={type}></IdeaCloud>
        
        const newcloudwall = [...idea, {id:id, desc:desc, type:type, clicked:false}]
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

    return (
        <div>
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
    <div className="container mt-3 ml-100px ">
    <div className="card p-2 py-3">
    <div className="text-center">
    <div className="col-md-12">    

    <form onSubmit={ideaCreation}>
			      <input value={desc}
                     onChange={doDescChange}
                     placeholder="What's your idea?">
			      </input>
			      <input type="submit" value="Add"></input>
			    </form> 
    </div></div></div></div></div>
    )
}
export default CloudWall;