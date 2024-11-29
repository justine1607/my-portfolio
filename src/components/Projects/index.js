import React, { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import chloroR from '../../assets/images/product-list-with-cart-large.png';
import restaurant from '../../assets/images/restaurant-large.png';
import quizapp from '../../assets/images/quiz-app-large.png';
import meet from '../../assets/images/meet-landing-large.png';

const Projects = () => {
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
          <div className='theme-container'>
              <div className='container'>
                  <div className='project-container project-page'>
                      <div className='project-text'>
                          <h1>
                              <AnimatedLetters
                                strArray={['M', 'y', '', 'P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                                idx={15}
                                letterClass={letterClass}
                              />
                          </h1>
                      </div>
                      <div className='my-projects'>
                          <div className='project01 projects'>
                              <div className='image-wrapper'>
                                  <img className='my-project1 animate--fast slideInLeft' src={chloroR}
                                       alt='pic of my 1st project' />
                              </div>
                              <div className='title-wrapper'>
                                  <h3>product list with cart</h3>
                                  <div className='language'>
                                      <p className='languge-text'>html</p>
                                      <p className='languge-text'>scss</p>
                                      <p className='languge-text'>javascript</p>
                                  </div>
                                  <div className='project-link'>
                                      <h3>
                                      <a className='link1 animate--fast slideInLeft'
                                             href='https://add-to-cart-five.vercel.app/'>View Project</a>
                                      </h3>
                                      <h3>
                                          <a className='link1 animate--fast slideInLeft'
                                             href='https://github.com/justine1607/add-to-cart'>View Code</a>
                                      </h3>
                                  </div>
                              </div>
                          </div>
                           <div className='project02 projects'>
                              <div className='image-wrapper'>
                                  <img className='my-project1 animate--fast slideInLeft' src={restaurant}
                                       alt='pic of my 1st project' />
                              </div>
                              <div className='title-wrapper'>
                                  <h3>restaurant project</h3>
                                  <div className='language'>
                                      <p className='languge-text'>html</p>
                                      <p className='languge-text'>scss</p>
                                      <p className='languge-text'>javascript</p>
                                  </div>
                                  <div className='project-link'>
                                      <h3>
                                      <a className='link1 animate--fast slideInLeft'
                                             href='https://restaurant-recipe-project.vercel.app/'>View Project</a>
                                      </h3>
                                      <h3>
                                          <a className='link1 animate--fast slideInLeft'
                                             href='https://github.com/justine1607/restaurant-recipe'>View Code</a>
                                      </h3>
                                  </div>
                              </div>
                          </div>
                            <div className='project03 projects'>
                              <div className='image-wrapper'>
                                  <img className='my-project1 animate--fast slideInLeft' src={meet}
                                       alt='pic of my 1st project' />
                              </div>
                              <div className='title-wrapper'>
                                  <h3>meet landing page</h3>
                                  <div className='language'>
                                      <p className='languge-text'>html</p>
                                      <p className='languge-text'>scss</p>
                                      <p className='languge-text'>javascript</p>
                                  </div>
                                  <div className='project-link'>
                                      <h3>
                                      <a className='link1 animate--fast slideInLeft'
                                             href='https://meet-landingpagesolution.vercel.app/'>View Project</a>
                                      </h3>
                                      <h3>
                                          <a className='link1 animate--fast slideInLeft'
                                             href='https://github.com/justine1607/meet-landingpagesolution'>View Code</a>
                                      </h3>
                                  </div>
                              </div>
                          </div>
                            <div className='project04 projects'>
                              <div className='image-wrapper'>
                                  <img className='my-project1 animate--fast slideInLeft' src={quizapp}
                                       alt='pic of my 1st project' />
                              </div>
                              <div className='title-wrapper'>
                                  <h3>react quiz app game</h3>
                                  <div className='language'>
                                      <p className='languge-text'>html</p>
                                      <p className='languge-text'>scss</p>
                                      <p className='languge-text'>javascript</p>
                                  </div>
                                  <div className='project-link'>
                                      <h3>
                                      <a className='link1 animate--fast slideInLeft'
                                             href='https://react-quiz-game-six.vercel.app/'>View Project</a>
                                      </h3>
                                      <h3>
                                          <a className='link1 animate--fast slideInLeft'
                                             href='https://github.com/justine1607/react-quiz-game'>View Code</a>
                                      </h3>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
};

export default Projects;
