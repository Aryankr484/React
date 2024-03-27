// About.js
import React from 'react';
import Card from './Card';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Description of your application goes here.</p>
      <Card 
        title="Team Member 1" 
        image="url_to_team_member_1_image.jpg" 
        description="Description of team member 1 goes here." 
      />
      <Card 
        title="Team Member 2" 
        image="url_to_team_member_2_image.jpg" 
        description="Description of team member 2 goes here." 
      />
    </div>
  );
}

export default About;
