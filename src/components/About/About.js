import React, { useEffect } from 'react';

import profile from '../../images/profile.jpg';

import './About.scss';

const About = () => {

  useEffect(() => {
    const fadeInElements = () => {
      let fadedElements = document.querySelectorAll('.faded');
      for (let i = 0; i < fadedElements.length; i++) {
        let introPos = fadedElements[i].getBoundingClientRect().top;
        let screenPos = window.innerHeight/1.2;
        if (introPos < screenPos ) {
          fadedElements[i].classList.add('fade-in');
        }
      }
    }
      window.addEventListener('scroll', fadeInElements)
  })
  return (
    <div class="about-container">
      <div class="alignment">
        <img src={profile} />
        <div className="faded">
          <h2>About</h2>
          <p>Previously a paralegal, I transitioned into web development last year by teaching myself to code. (Thanks internet!) My first development job was for an art/education supply retailer in northern Indiana where I handled both their website and internal intranet. From there, I moved into a software development role for a Managed Security Service Provider, where my tasks mainly involved the front end of the company's proprietary customer portal. Unforunately, COVID-19 forced the company to downsize and I was laid off as a result, so if you're looking for a software developer, consider shooting me a message down below!<a name="contact"></a></p>
        </div>
      </div>
    </div>
  )
}

export default About;
