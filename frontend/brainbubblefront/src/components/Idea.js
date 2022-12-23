
function Idea({id, item, clicked, deleteIdea, toggleDelete})
{
    
 return(
    <>
    
    <h4 onClick={()=>{toggleDelete(id)}}>
           {item} 
    </h4>
    {clicked && <button onClick={()=>{deleteIdea(id)}}>Erase</button>}
    </>
 )
}
export default Idea;