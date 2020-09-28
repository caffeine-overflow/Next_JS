import React from 'react'

function navbar() {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="logoHeader">
          <a href="index.html"><img src={require("../images/main/profile.png")} alt="banner" /></a>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <a href="index.html">'main'</a>
          <a href="aboutme.html">a 'bit' about me</a>
          <a href="projects.html">my 'builds'</a>
          <a href="photography.html">photography</a>
        </div>
      </div>
      <style jsx>
        {`

          .nav > .nav-btn {
              display: none;
          }

          .nav{
            display:flex;
            justify-content:center;
            margin-top: 40px;
          }
          
          .nav > .nav-links {
              font-size: 29px;
              margin: 20px 0 0px 30%;
          }
          
          .nav > .nav-links > a {
              padding: 13px 35px 13px 35px;
              text-decoration: none;
              color: #282828;
          }
          
          .nav > .nav-links > a:hover {
              color:goldenrod;    
          }
          
          .nav > #nav-check {
              display: none;
          }

          .logoHeader {
              display: inline;
          }

          .logoHeader img {
              height:80px;
            }

        
          @media (max-width:600px) {
              .nav > .nav-btn {
              display: inline-block;
              position: absolute;
              right: 0px;
              top: 35px;
              }
              .nav > .nav-btn > label {
              display: inline-block;
              width: 50px;
              height: 50px;
              padding: 13px;
              }
              .nav > .nav-btn > label > span {
              display: block;
              width: 25px;
              height: 10px;
              border-top: 2px solid black;
              }
              .nav > .nav-links {
              font-size: 20px;
              position: absolute;
              display: block;
              width: 95%;
              margin: 0 10px 0 10px ;
              background-color: goldenrod;
              height: 0px;
              transition: all 0.3s ease-in;
              overflow-y: hidden;
              top: 107px;
              left: 0px;
              z-index: 1000;  
              }
              .nav > .nav-links > a {
              display: block;
              width: 100%;
              }
              .nav > #nav-check:not(:checked) ~ .nav-links {
              height: 0px;
              margin-top: 30px;
              }
              .nav > #nav-check:checked ~ .nav-links {
              height: calc(43vh - 50px);
              overflow-y: auto;
              }
              .logoHeader{
                display: none;
              }
          }            
       `}
      </style>
    </div>
  )
}

export default navbar

