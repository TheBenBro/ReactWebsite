import './Projects.css';
import React from 'react';
import prizeFight from './Images/PrizeFight.png'
import cryptis from './Images/Cyrptis.png'
import { Button } from './Components/Button.Style'

function Projects() {
  return (
    <div className='Project'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <div className='myProjects'>
        <h1>MyProjects</h1>
      </div>
      <div className='fightingGame'>
        <p>CODENAME PRIZEFIGHT is a fighting game implemented in a custom OpenGL based C++ engine designed specifically to cater to 3D fighting games. It uses morph target animation to achieve a feel inspired by Tekken 3. It hybridizes aspects of 3D and 2D fighters to create a unique and accessible experience. This engine is the primary result of the capstone project. It accomplishes collision, animation, sound, UI, AI Steering, dynamic object creation and removal and scene switching. It also contains a simplistic form of networking, pathfinding and a want based decision tree for AI.</p>
        <Button onClick={() => window.location.href = 'https://library.humber.ca/collections/repository/content/codename-prizefight'}>
          Learn More
        </Button>
        <img src={prizeFight} alt="" />
      </div>
      <div className='Cryptis'>
        <img src={cryptis} alt="" />
        <p>CODENAME PRIZEFIGHT is a fighting game implemented in a custom OpenGL based C++ engine designed specifically to cater to 3D fighting games. It uses morph target animation to achieve a feel inspired by Tekken 3. It hybridizes aspects of 3D and 2D fighters to create a unique and accessible experience. This engine is the primary result of the capstone project. It accomplishes collision, animation, sound, UI, AI Steering, dynamic object creation and removal and scene switching. It also contains a simplistic form of networking, pathfinding and a want based decision tree for AI.</p>
        <Button onClick={() => window.location.href = 'https://drive.google.com/drive/folders/1twLR0k3q0D-wkaMzpc2wRKHaqntiRdO8'}>
          Download Link
        </Button>
      </div>
    </div>
  );
}

export default Projects;