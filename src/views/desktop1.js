import React from 'react'

import { Helmet } from 'react-helmet'

import './desktop1.css'

const Desktop1 = (props) => {
  return (
    <div className="desktop1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="desktop1-desktop1">
        <a
          href="https://www.linkedin.com/in/cheng220/"
          target="_blank"
          rel="noreferrer noopener"
          className="desktop1-link"
        >
          <img
            src="/playground_assets/fb67f808-edc8-417b-9b1f-a48ec9fed463-azde.svg"
            alt="linkedinlogo4026"
            className="desktop1-linkedinlogo"
          />
        </a>
        <a
          href="https://github.com/davidcheng220"
          target="_blank"
          rel="noreferrer noopener"
          className="desktop1-link1"
        >
          <div className="desktop1-githublogo">
            <img
              src="/playground_assets/8c818197-029b-48b1-a3da-f0b3d76bf1da-0xh2.svg"
              alt="Group4010"
              className="desktop1-group"
            />
          </div>
        </a>
        <a
          href="https://www.youtube.com/channel/UCFpnVcJRcxE5qaTtsMuJBLQ"
          target="_blank"
          rel="noreferrer noopener"
          className="desktop1-link2"
        >
          <div className="desktop1-you-tubelogo">
            <img
              src="/playground_assets/e8dadab7-2559-446b-bd77-b30df8aca2b9-8r0p.svg"
              alt="Group4032"
              className="desktop1-group1"
            />
          </div>
        </a>
        <div className="desktop1-group2">
          <span id="11:7" className="desktop1-text">
            About me
          </span>
          <img
            alt="Vector11619"
            src="/playground_assets/6ce78e53-633f-4abf-b2e3-7dd901f2741b-f6oe.svg"
            className="desktop1-svg"
          />
        </div>
        <span className="desktop1-text01">
          <span>
            Hi, my name is Ching-Yen Cheng. I am recent graduate from University
            of Washington Bothell where I completed my bacholars in Mathematics.
            Duing college, I did numerical analysis with MATLAB, math proving
            with LATEX, and statistic. Python is my primary programming language
            and famaliar with Java, JavaScript, and HTML.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Currently I am also doing game video editing as my side interest
          </span>
        </span>
        <span className="desktop1-text07">
          <span>Bike Lane System:</span>
          <br></br>
          <span></span>
        </span>
        <span className="desktop1-text11">
          <span>Skills:</span>
          <br></br>
          <span>Python</span>
          <br></br>
          <span>Flask</span>
          <br></br>
          <span>JavaScript</span>
          <br></br>
          <span>Java</span>
          <br></br>
          <span>MATLAB</span>
          <br></br>
          <span>LATEX</span>
          <br></br>
          <span>Video Editing</span>
        </span>
        <span className="desktop1-text27">
          <span>Intrest:</span>
          <br></br>
          <span>Video Games</span>
          <br></br>
          <span>Genshin Impact</span>
          <br></br>
          <span>World of Warcraft</span>
          <br></br>
          <span>Traveling</span>
          <br></br>
          <span>Coding</span>
        </span>
        <div className="desktop1-group3">
          <span id="38:135" className="desktop1-text39">
            Projects
          </span>
          <img
            alt="Vector138136"
            src="/playground_assets/b66ffff1-785e-4a75-8bd2-90ee606d2b07-lc46.svg"
            className="desktop1-svg1"
          />
        </div>
        <div className="desktop1-group4">
          <span id="38:138" className="desktop1-text40">
            More Info
          </span>
          <img
            alt="Vector138139"
            src="/playground_assets/fc189418-4b9a-4b2e-b2cc-8a35ffd44d0c-snm.svg"
            className="desktop1-svg2"
          />
        </div>
        <span className="desktop1-text41">
          Designed a bike lane system with Prim’s and Kruskal’s algorithm in
          real world to solve which is the best way to analyze a lowest cost
          bike lane system within bus station and explained the bike lane is
          reasonable.
        </span>
        <span className="desktop1-text42">Home Accounting Web:</span>
        <span className="desktop1-text43">
          Web design that built with Flask and also helps me anlyze about how
          much expense in monthly such as utilities and rent.
        </span>
        <img
          src="/playground_assets/2d92ed4b-3f06-4765-9a18-bce3657bf978-8vf.svg"
          alt="Rectangle84012"
          className="desktop1-rectangle8"
        />
        <a href="#11:7" className="desktop1-text44">
          About Me
        </a>
        <a href="#38:135" className="desktop1-text45">
          Projects
        </a>
        <a href="#38:138" className="desktop1-text46">
          More Info
        </a>
      </div>
    </div>
  )
}

export default Desktop1
