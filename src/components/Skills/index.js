import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo1 from '../../assets/images/logo1.png';
import Logo2 from '../../assets/images/logo2.png';
import Logo3 from '../../assets/images/logo3.png';
import Logo4 from '../../assets/images/logo4.png';
import Logo5 from '../../assets/images/logo5.png';
import Logo6 from '../../assets/images/logo6.png';
import Logo7 from '../../assets/images/logo7.png';
import Logo8 from '../../assets/images/logo8.png';
import Logo9 from '../../assets/images/logo9.png';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animated');

  useEffect(() => {
    let timeoutId;
    if (letterClass === 'text-animated') {
      timeoutId = setTimeout(() => {
        setLetterClass('text-animated-hover');
      }, 3000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [letterClass]);

  return (
    <div className='theme-container skills-container'>
      <div className='container'>
        <div className='container skills-page'>
          <div className='skills-text'>
            <h1 className='text'>
              <AnimatedLetters
                strArray={['S', 'k', 'i', 'l', 'l', 's', '&', 'E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                idx={15}
                letterClass={letterClass}
              />
            </h1>
            <p className='animate--fast slideInLeft body-text '>
              A goal-oriented Entry Level Frontend Developer including technologies like HTML,
              CSS3 JavaScript,React,Bootstrap,Sass,Git,etc.
              I'm not a designer but I have a good sense of aesthetic, and respomsive,mobile-
              first-web design. I put special effrot into optimizing my code and providing the
              best user experience. I would love to give any kind of support also after the
              project's completion. I guarantee a commitment during work on your project.
              Visit my <a href='https://www.linkedin.com/in/justine-miras-929778280/'>LinkeIn</a> profile for more
              details. Also you can check my cv on this <a href='#'>link</a>
            </p>
          </div>
          <div className='cubes'>
            <div className="card-container1 card-container animate--fast slideInRight">
              <div className='card1 card'>
                <div className='front'>
                  <img src={Logo1} className="card-img-top" alt="html" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">HTML</h5>
                  <p className="card-text">HTML is the standard markup language for creating web pages and web
                    applications.</p>
                  <a href="https://www.w3schools.com/html/html_intro.asp" className="button">Learn More</a>
                </div>
              </div>
              <div className='card2 card'>
                <div className='front'>
                  <img src={Logo2} className="card-img-top" alt="css" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">CSS</h5>
                  <p className="card-text">CSS is a style sheet language used for describing the look and formatting of
                    a document written in HTML.</p>
                  <a href="https://www.w3schools.com/css/css_intro.asp" className="button">Learn More</a>
                </div>
              </div>

              <div className='card3 card'>
                <div className='front'>
                  <img src={Logo3} className="card-img-top" alt="javascript" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">JavaScript</h5>
                  <p className="card-text">JavaScript is a high-level, interpreted programming language that is widely
                    used for building interactive web pages.</p>
                  <a href="https://www.w3schools.com/js/" className="button">Learn More</a>
                </div>
              </div>
            </div>
            <div className="card-container2 card-container animate--fast slideInRight">
              <div className='card4 card'>
                <div className='front'>
                  <img src={Logo4} className="card-img-top" alt="react" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">REACT</h5>
                  <p className="card-text">React is a free and open-source front-end JavaScript library for building
                    user interfaces based on components.</p>
                  <a href="https://en.wikipedia.org/wiki/React_(software)" className="button">Learn More</a>
                </div>
              </div>
              <div className='card5 card'>
                <div className='front'>
                  <img src={Logo5} className="card-img-top" alt="bootsrap" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">BOOTSTRAP</h5>
                  <p className="card-text">Bootstrap is a free and open-source CSS framework directed at responsive,
                    mobile-first front-end web development.</p>
                  <a href="https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)" className="button">Learn
                    More</a>
                </div>
              </div>

              <div className='card6 card'>
                <div className='front'>
                  <img src={Logo6} className="card-img-top" alt="node.js" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">NODE.JS</h5>
                  <p className="card-text">Node.js is a cross-platform, open-source JavaScript runtime environment that
                    can run on Windows, Linux, Unix, macOS, and more.</p>
                  <a href="https://en.wikipedia.org/wiki/Node.js" className="button">Learn More</a>
                </div>
              </div>
            </div>
            <div className="card-container3 card-container animate--fast slideInRight">
              <div className='card7 card'>
                <div className='front'>
                  <img src={Logo7} className="card-img-top" alt="git" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">GIT</h5>
                  <p className="card-text">Git is a version control system. Git helps you keep track of code changes.Git
                    is used to collaborate on code.</p>
                  <a href="https://www.w3schools.com/git/" className="button">Learn More</a>
                </div>
              </div>
              <div className='card8 card'>
                <div className='front'>
                  <img src={Logo8} className="card-img-top" alt="mongodb" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">MONGODB</h5>
                  <p className="card-text">MongoDB is a document database with the scalability and flexibility with the
                    querying and indexing that you need.</p>
                  <a href="https://www.mongodb.com/what-is-mongodb" className="button">Learn More</a>
                </div>
              </div>

              <div className='card9 card'>
                <div className='front'>
                  <img src={Logo9} className="card-img-top" alt="tailwind" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">TAILWIND</h5>
                  <p className="card-text">Tailwind CSS is an open source CSS framework. The main feature of this
                    library is that, unlike other CSS frameworks like Bootstrap.</p>
                  <a href="https://en.wikipedia.org/wiki/Tailwind_CSS" className="button">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
