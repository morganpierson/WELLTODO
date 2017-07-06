import React from 'react';
import { Well, Panel } from 'react-bootstrap';

const About = () => {
  return (
    <Well style={{textAlign: 'center', fontWeight: 'bold'}}>
      <Panel>
        <p>
        My name is Morgan Pierson. 
        I am a fullstack Javascript developer. 
        I love the ocean and music, and I am a big fan of all things tech. 
        I can be contacted directly via email at morganpierson@gmail.com
        </p>
      </Panel>
    </Well>
  )
}

export default About;