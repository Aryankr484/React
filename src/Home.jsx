// Home.js
import React from 'react';
import Card from './Card';

const Home = () => {
  return (
    <div>
      <h1>Welcome to our Website</h1>
      <Card 
        title="Featured Item" 
        image="url_to_featured_image.jpg" 
        description="Description of the featured item goes here." 
      />
    </div>
  );
}

export default Home;
