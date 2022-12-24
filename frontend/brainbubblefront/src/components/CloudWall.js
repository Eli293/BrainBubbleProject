import {useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Idea from './Idea';
import Draggable from 'react-draggable';
import IdeaCreator  from '../IdeaCreator';
import 'bootstrap/dist/css/bootstrap.min.css';
import IdeaCloud from '../IdeaCloud';


let id = 2;
function CloudWall()
{
    const initialCloudWall = [{id: 1, desc:'Random Idea', clicked:false}]; //get request to backend

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


    const addIdea = (desc)=>
    {
        //post request
        const newcloudwall = [{id:id, desc:desc, type:type, clicked:false}]
        setIdea(initialCloudWall, newcloudwall)
        id++;
        toast.success("A new Idea has appeared!", {
            position: toast.POSITION.TOP_CENTER
        }); 
    }
    const doDescChange=(event)=>{
        setDesc(event.currentTarget.value);
    }

    const ideaCreation=(event)=>{
        event.preventDefault();
        addIdea(desc, type);
        setDesc("");
        return(
            <div className={type}>
                <div className='content'>
                {idea.map((item)=>(
                           
                           <Idea id={item.id} item={item.desc} deleteIdea={deleteIdea} clicked={item.clicked} toggleDelete={toggleDelete}></Idea> 
                             
                           ))}; 
                </div>
            </div>
        )
    }

    return(
        <div>
            
          <Draggable>
               <div className="Cloud">
                   <div className='content'>
                        {idea.map((item)=>(
                           
                         <Idea id={item.id} item={item.desc} deleteIdea={deleteIdea} clicked={item.clicked} toggleDelete={toggleDelete}></Idea> 
                           
                         ))}; 
                         
                   </div>
               </div>
            </Draggable>   
               
             
           <div className="container m-0">
           <div className="card m-0">
           <div className="text-center">
           <div className="col-md-12">    
           <h4>Idea Creator</h4>
           <form onSubmit={ideaCreation}>
                         <input value={desc}
                            onChange={doDescChange}
                            placeholder="What's your idea?">
                         </input>
                         <input type="submit" value="Add"></input>
                       </form>
       
           </div></div></div></div></div>
           
     );
}
export default CloudWall;