import Editable from 'react-editable-title';
import './App.css';
import CloudWall from './components/CloudWall';
import { useState } from 'react';
import IdeaCreator from './IdeaCreator';
import Idea from './components/Idea';
import IdeaCloud from './IdeaCloud';

function App() {
    const [project, setProject] = useState('Brain Bubble Project');
    const [credits, setCredits] = useState('By [Your Name]');
   
    const handleTextUpdate = (project) => {
      setProject(project);
    }
    const handleCreditUpdate = (credits) => {
      setCredits(credits);
    }
  return (
    <div className="App">
      <h1>
        <Editable
          text={project}
          editButton
          cb={handleTextUpdate}></Editable>
      </h1>
      <h3>
         
      <Editable
          text={credits}
          editButton
          cb={handleCreditUpdate}></Editable>
      </h3>

      <CloudWall></CloudWall>

<br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br>
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>

</div>
  );
}

export default App;
