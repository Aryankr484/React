import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, libero. Earum dolores quasi nobis temporibus repellendus consequatur voluptatum vero reiciendis sit iste! Modi quisquam similique voluptatibus perspiciatis impedit facere, maiores aspernatur explicabo?
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
