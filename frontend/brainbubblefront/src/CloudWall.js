import {useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Combobox from "react-widgets/Combobox";
import Idea from './Idea';
import Draggable from 'react-draggable'
import IdeaCreator  from './IdeaCreator';

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

    const deleteIdea = (id)=>
    {
        //delete request
        const cloudwall = [...idea];
        const newcloudwall = cloudwall.filter(item => item.id !== id);
        setIdea(newcloudwall);
    }

    const addIdea = (desc, type)=>
    {
        //post request
        const newcloudwall = [...idea, {id:id, desc:desc, type:type, clicked:false}]
        setIdea(newcloudwall);
        id++;
        toast.success("A new Idea has appeared!", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const [desc, setDesc] = useState("");
    const [type, setType] = useState("Cloud");

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
            <Draggable defaultPosition={{x: 0, y: 0}}>
            <div className={type}>
                <div className='content'>
                     {idea.map((item)=>(

                        <Idea id={item.id} item={item.desc} deleteIdea={deleteIdea} clicked={item.clicked} toggleDelete={toggleDelete}></Idea>

                      ))} 
                </div>
            </div>
            </Draggable>
        <div>
            <IdeaCreator name="Idea Creator">
            <div>
                <Combobox
                    defaultValue="Cloud"
                    data={["Cloud", "Square", "Circle" ]}
                    onChange={doTypeChange}
                    placeholder="Choose a Bubble Type"></Combobox>
                </div>
                <div>

                <form onSubmit={ideaCreation}>
			      <input value={desc}
                     onChange={doDescChange}
                     placeholder="What's your idea?">
			      </input>
			      <input type="submit" value="Add"></input>
			    </form>  

                </div>
            </IdeaCreator>
        </div>
        </div>
    )
}
export default CloudWall;