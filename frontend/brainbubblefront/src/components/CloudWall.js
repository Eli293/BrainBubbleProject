import {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Idea from './Idea';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

let id = 2;
function CloudWall()
{

    //We set the initial cloudwall which is an empty array
    const [cloudwall, setCloudWall] = useState([]);
    const [desc, setDesc] = useState("");

    //get request to backend
    const loadCloudWallfromAPI = () => {
        axios.get("localhost:8084/api/ideas")
        .then(function (response){
            if(response.status === 200)
            setCloudWall(response.data);
        })
    }

    const ToggleDelete = (id, clicked) =>{
        
        //put request to the API
        axios.put("localhost:8084/api/ideas/"+id,{clicked:!clicked})
        useEffect(()=>{   
            loadCloudWallfromAPI(); 
        },[cloudwall]) 
    }



    const DeleteIdea = (id)=>
    {
        //delete request
        axios.delete("localhost:8084/api/ideas/"+id) 
        useEffect(()=>{   
            loadCloudWallfromAPI(); 
        },[cloudwall]) 

    }


    const AddIdea = (desc)=>
    {
        //post request
        
        axios.post("localhost:8084/api/ideas",{
            "ideaDesc": desc, 
            "clicked": false,
            "cloud": {"type":"Cloud", 
                    "color":"White"}
        })
          .then(function (response) {
            if(response.status === 200)
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
          useEffect(()=>{   
            loadCloudWallfromAPI(); 
        },[cloudwall]) 
        id++

        toast.success("A new Idea has appeared!", {
            position: toast.POSITION.TOP_CENTER
        }); 

    }

    const doDescChange=(event)=>{
        setDesc(event.currentTarget.value);    
    }

    const IdeaCreation=(event)=>{
        event.preventDefault();
        AddIdea(desc);
        setDesc("");
    }

    return(
        <div>
             { cloudwall.map((item)=>(
                        
                <Idea id={item.id} item={item.desc} deleteIdea={DeleteIdea} clicked={item.clicked} toggleDelete={ToggleDelete}></Idea> 
                            
            )) }  
        
           <div className="container m-0">
           <div className="card m-0">
           <div className="text-center">
           <div className="col-md-12"> 

           <h4>Idea Creator</h4>

           <form onSubmit={IdeaCreation}>
                    <input value={desc}
                        onChange={doDescChange}
                        placeholder="What's your idea?">
                    </input>
                    <input type="submit" value="Add"></input>
            </form>
       
           </div></div></div></div>
           </div>
           
     )

    }
export default CloudWall;