import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img}alt="" className='about-img'/>
            <img src={play_icon} alt=""className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus suscipit ipsam perspiciatis iusto doloremque nesciunt nulla error ducimus deleniti. Odio eaque laborum et eius ipsum voluptatum vel ab nostrum fuga!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia in quo cumque iste. Eum ipsam officia laboriosam commodi voluptatem? Quisquam, delectus velit voluptatum cumque excepturi facilis esse veritatis nobis adipisci error fugit quos porro.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam iste sequi, deleniti necessitatibus vitae temporibus facilis laudantium repudiandae sunt, incidunt exercitationem illo? Impedit exercitationem, in veritatis cum possimus odio at dolores!</p>
            
        </div>
    </div>
  )
}

export default About
