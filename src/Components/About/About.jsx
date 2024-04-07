import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
    return (
        <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}  />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa placeat quae laudantium dolores blanditiis porro alias molestiae quisquam nemo odit maxime .</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo mollitia, deleniti libero aspernatur eum distinctio dolorem hic illum assumenda a?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iusto inventore tempora earum voluptatem error doloremque sequi expedita consequatur sit impedit .</p>
        </div>
        </div>
    )
}

export default About
