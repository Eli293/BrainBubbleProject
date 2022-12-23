import {useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Combobox from "react-widgets/Combobox";
import 'bootstrap/dist/css/bootstrap.min.css';

let id = 2;
function IdeaCreator()
{
    const initialCloudWall = [{id: 1, desc:'Random Idea', type:'Cloud', clicked:false}]; //get request to backend

    const [idea, setIdea] = useState(initialCloudWall);

    const [desc, setDesc] = useState("");
    const [type, setType] = useState("Cloud");

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
    return(
        <div>
                <Combobox
                    defaultValue="Cloud"
                    data={["Cloud", "Square", "Circle" ]}
                    value={type}
                    onChange={type => setType(type)}
                    placeholder="Choose a Bubble Type"></Combobox>
                    

                <form onSubmit={ideaCreation}>
			      <input value={desc}
                     onChange={doDescChange}
                     placeholder="What's your idea?">
			      </input>
			      <input type="submit" value="Add"></input>
			    </form> 
        </div>
    );
}
export default IdeaCreator;