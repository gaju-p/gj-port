import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/zaini.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/tan.jpg'
import IMG4 from '../../assets/tandoori.jpg'
import IMG5 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Zaini Curtain',
    demo: 'https://zainicurtain.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Pieux Organic',
    demo: 'https://pieuxorganic.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'TAN 365',
    demo: 'https://tan365.in/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Tandoori Trail',
    demo: 'https://tandooritrail.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Sanatana World',
    demo: 'https://sanatana.world/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noopener">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio