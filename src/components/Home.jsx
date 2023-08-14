import React from 'react'

import './Home.css';

function Home() {
  return (
    <div className='home'>
     <section id='home-hero' className='home-hero'>
      <div className='home-hero-image' >background image</div>
      <div className='home-navbar' >Navigation menu</div>

      <div className='home-hero-text'>
        <h1>Empowring <strong>Youth</strong> </h1>
        <h3>...one paddle at a time!</h3>
        <button className='home-hero-button'>Book a trip</button>
        <a href="">Contact</a>
      </div>
     </section>


     <section id='home-mission' className='home-mission' >
       mission section
     </section>


     <section id='home-tours' className='tours' >
      <h1>our previous trips</h1>
      <h1>What parents say about our Project:</h1>
     </section>

     <section className='home-faq' >
      <h1>FAQ</h1>
     </section>


     





    </div>
  )
}

export default Home