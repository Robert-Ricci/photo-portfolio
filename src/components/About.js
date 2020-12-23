import React from 'react';
import Headshot from '../headshotcopy.jpg';
import Image from 'react-bootstrap/Image';


const About = () => {
    return (
        <div className="about-page">
            <p className="about">Hello, My name is Robert, and I like to take photos. Most of the photos you will see are of the outdoors, actually all of the photos are of the outdoors. 
            
           When I decided that I wanted to make a photo portfolio, I kept thinking about the different sites I could use. Then it came to me, wouldn't it be cool if I created the page myself. So I looked up some ideas, and settled on React.
           
           So, this page uses React, Framer Motion, and React-Bootstrap. I plan on editing and making it better as time goes by, but for know this is what I came up with
           </p>
            <Image className="headshot" src={Headshot} roundedCircle />
        </div>
    );
};

export default About;