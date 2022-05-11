import React, { useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
const Home = () => {

    const [letterClass,setLetterClass] = useState('text-animate');
    const nameArrary = ['f','a','h','a','d',' '];
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','p','e','r'];

    // useEffect(()=>{
    //     return setTimeout(()=>{
    //         setLetterClass('text-animate-hover')
    //     },4000)
    // },[]);

    return (
        <div className="container home-page">
            <h1>Hi, <br /> I'm
            <img src={LogoTitle} alt="developper" />
            <AnimatedLetters letterClass={letterClass} strArray={nameArrary} idx={15}></AnimatedLetters>
             Abdullah
            <br />
            Web developper
            </h1>
            <h2>Frontend Developer / Js Expert / Youtuber / </h2>
            <Link to='/contact' className='flat-button'>Contact Me</Link>
        
        </div>
    );
};

export default Home;