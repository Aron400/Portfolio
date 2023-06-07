import React from 'react';
import IMG1 from '../../assets/Simply_Food.png';
import IMG2 from '../../assets/dog_log.png';
import IMG3 from '../../assets/shelter.png';
import IMG4 from '../../assets/DH2.png';
import IMG5 from '../../assets/burrito_loco.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 3,
      title: 'Dog Log',
      img: IMG2,
      description: 'Dog care app that helps families make sure their dogs are being properly taken care off',
      technologies: 'React | CSS | Express | Node.js | MySQL',
      link: 'https://youtu.be/03YGqH05HGk',
      github: 'https://github.com/Aron400/Dog-Log',
    },
    {
      id: 1,
      title: 'Simply Food',
      img: IMG1,
      description:
        'Recipe app that allows users to find new recipes by searching ingredients and get nutrition information',
      technologies: 'Javascript | jQuery | HTML | CSS',
      link: 'https://youtu.be/mdCewlE3MfY',
      github: 'https://github.com/Aron400/Simply-Food',
    },
    {
      id: 2,
      title: 'Diamon Hands',
      img: IMG4,
      description:
        'Fun budgetting app that allows users to track daily, monthly and yearly budgetting with visual status updates',
      technologies: 'React | Redux | CSS',
      link: 'https://youtu.be/TospZOCRUig',
      github: 'https://github.com/Aron400/Diamond-Hands',
      site: 'https://gregarious-speculoos-c410a4.netlify.app/'
    },
    {
      id: 4,
      title: 'Burrito Loco',
      img: IMG5,
      description:
        'Fun recipe app that helps users find new random ways to make aburrito based on ingredients available.',
      technologies: 'React | CSS',
      github: 'https://github.com/Aron400/burrito-loc',
      site: 'https://burritoloco.netlify.app/'
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Video
              </a>
              <a
                href={pro.site}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Site
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
