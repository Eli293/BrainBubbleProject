import Draggable from 'react-draggable'
function Idea({item, deleteIdea, toggleDelete})
{
    
 return(
    <>
   <Draggable defaultPosition={{x:0, y:0}}>
   <div className="Cloud">
      <div className='content'>
         <h4 onClick={()=>{toggleDelete(item.id)}}>
            {item.desc} 
         </h4>
    </div>
   </div>
   </Draggable>
    {item.clicked && <button onClick={()=>{deleteIdea(item.id)}}>Erase</button>}
   
    </>
 )
}
export default Idea;