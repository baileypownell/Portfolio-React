import React, { useEffect, useState } from 'react';
import postgres from '../../images/postgresql.png';
import heroku from '../../images/heroku.svg';
import udemy from '../../images/udemy.png';
import './Intro.scss';

const Intro = () => {
  const [ certifications, setCertifications ] = useState([]);
  useEffect(() => {
    fetch(`/udemy_certs`)
    .then((response) => {
       return response.json();
    })
    .then((data) => {
      setCertifications(data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, []);
  return (
    <div className="intro">
      <p className="faded">
        I develop mobile-first and fully responsive applications, using React for the front end, Node.js/PostgreSQL on the back end, and connecting the two with RESTful API's.
      </p>
      <h2 className="faded">My favorite technologies</h2>
      <div className="tech">
        <i className="fab fa-html5"></i>
        <i className="fab fa-css3-alt "></i>
        <i className="fab fa-sass"></i>
        <i className="fab fa-js "></i>
        <i className="fab fa-react "></i>
        <i className="fab fa-node "></i>
        <i className="fab fa-git-square "></i>
        <img src={postgres} alt="postgreSQL" />
        <img src={heroku} alt="heroku" />
      </div>
      
      <div style={{ paddingTop: `4vw`}}>
        <h2 className="faded">Udemy Certificates</h2>
        <div className="faded certifications">
          {certifications.map((cert, index) => (     
            <a href={`/udemy_certs/${cert.link}`} target="_blank">
              <div className="udemy">
                <img src={udemy} />
                <div>
                  <p>{cert.title.substring(0, 30)}{cert.title.length > 30 ? '...' : null}</p>
                  <p className="bold">Issued: {cert.issued}</p>
                </div>
                
              </div>
            </a>
              
            
          ))}
        </div>
      </div>

    </div>
  )
}

export default Intro;
