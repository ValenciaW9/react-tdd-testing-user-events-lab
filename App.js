import React from 'react';
import NameForm from './NameForm';

function App() {
  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="IMG_2348.jpeg" />
      <h2>About Me</h2>
      <p>
        I am Valencia Walker, I am an aspiring Software engineer at Flat Iron School my graduation date 10.18.24.I enjoy building websited and creating and learning program languages. I'm currently finishing up my Master of Psychology Grad student at The University of Phoenix. I will have finished my Masters in Psychology by 04/01/24. My two Undergraduate background is in The Field of Health Administration. I obtained my B.S. in Health Administration from the University of Michigan-Flint in 2018. I received my A.S. in Health Administration in 2013 from Colorado Technical University. I've previously worked as a Medicare Advocate as an Independent Contractor; I have former experience as a Research Clinical Coordinator. I have experience as a certified Medicare Advocate. I’m pursuing my Master of Psychology and a Software Engineering Certificate from Flatiron School. 
      </p>

      <div>
        <a href="ValenciaW9 (github.com)">GitHub</a>
        <a href="https://www.linkedin.com/in/valencia-walker-306a7477/">LinkedIn</a>
      </div>

      <NameForm />
    </main>
  );
}

export default App;