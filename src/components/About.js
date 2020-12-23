import React from 'react';
import Headshot from '../headshotcopy.jpg';
import Image from 'react-bootstrap/Image';


const About = () => {
    return (
        <div className="about-page">
            <p className="about">Hello, My name is Robert, and I like to take photos. Most of the photos you will see are of the outdoors, actually all of the photos are of the outdoors. </p>
        <Image className="headshot" src={Headshot} roundedCircle />
        </div>
    );
};

export default About;