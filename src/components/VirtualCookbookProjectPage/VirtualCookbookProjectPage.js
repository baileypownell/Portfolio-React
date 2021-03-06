import React from 'react'
import './ProjectPage.scss'
import logo from './white-logo.png'

function VirtualCookbookProjectPage() {
  
  return (
      <div className="project-page">
        <input style={{display: 'none'}} tabIndex="1"></input>
        <img className="logo" src={logo}></img>
        <img className="project-photo" src="images/desktop_dashboard.png" ></img>
        <p>
          Built with React, Node.js, Express, MaterializeCSS, and PostgreSQL, Recipe Stash is a fullstack single page application involved a lot of software design concepts 
          I hadn't used before. Although I would never do this for a truly production-level application, 
          I decided to handle authentication myself. I used Nodemailer for sending emails when users want to change their password (for enhanced security), 
          built the API from scratch, and used bcrypt.js for password hashing. I decided to use session-based authentication after 
          reading a very convincing article against using JWTs for authentication purposes
          <a target="_blank" href="http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/">here</a>. 
          This project came about not by following a tutorial, but rather because I actually needed something like this.
        </p>
        <img className="project-photo" src="images/desktop_dashboard_filtering.png"></img>
        <img className="project-photo" src="images/recipe_desktop.png"></img>
        <p>
          I eventually added the ability to filter recipes by name and catgory. 
          After that, I added functionality to "tag" recipes by features such as sugar-free, dairy-free, vegan, etc.
        </p>
        <img className="project-photo mobile-view" src="images/settings_mobile.png"></img>
        <p>This is a closed source project.</p>
        <div className="button-holder">
            <a target="_blank" href="https://recipe-stash-1.herokuapp.com/"><button>Visit Project</button></a>
        </div>
      </div>
  )
}

export default VirtualCookbookProjectPage;
