import Editable from 'react-editable-title';
import './App.css';
import CloudWall from './CloudWall';
import { useState } from 'react';

function App() {
    const [project, setProject] = useState('Brain Bubble Project');
    const [credits, setCredits] = useState('By [Your Name]');
   
    const handleTextUpdate = (project) => {
      setProject(project);
    }
    const handleCreditUpdate = (credits) => {
      setProject(credits);
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


    </div>
  );
}

export default App;
