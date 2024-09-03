import React from 'react'
import { Navbar, Footer } from '../../components'
import Media from './Media'
import './Publications.css'

const Publications = () => {
  return (
    <div>
      <Navbar />
      
      <div className="blog__publication-intro">
        <h1>PUBLICATION</h1>
      </div>

      <div className="blog__publication-text">
        <p>
          As a woman of color, I am aware of my sociocultural positioning and therefore consider gender and race as the overriding premises of not only my research, but often my other writing pieces as well.
        </p>
        <p>
          And I feel deeply about many subjects that may be unassociated with what I have asserted are the major segments of PMGS. Stray animals, work-life balance, bullying culture, philosophical interpretations of everydayness are a few among many such subjects. 
        </p>
        <p>
          You may be able to see glimpses of these here!
        </p>
      </div>

      <div className="blog__publication-strait">
        <h1>THE STRAIT TIMES</h1>

        <div className="blog__publication-strait_container">
          <Media title="Need to address bullying in schools. The Strait Times" text=" A short opinion piece on one of my deeply felt subjects- Bullying, and its management in Singapore’s familial set-up." url="https://www.straitstimes.com/forum/letters-in-print/need-to-address-bullying-in-schools" />

          <Media title="Teach young how to be responsible media users, The Strait Times" text=" A short opinion piece on one of the prime subjects of PMGS- Media Literacy, and its importance especially among the youth of Singapore." url="https://www.straitstimes.com/opinion/forum/voices-of-youth-teach-young-how-to-be-responsible-media-users" />

          <Media title="Can't put monetary value on housework, The Strait Times" text="A short opinion piece on one of the prime subjects of PMGS- Gender which brings to light housewives’ engagement in unpaid labor." url="https://www.straitstimes.com/forum/letters-in-print/cant-put-monetary-value-on-housework" />
        </div>
      </div>

      <div className="blog__publication-uts">
        <h1>UTS</h1>

        <div>
          <h2 className="blog__publication-uts__subheading">The Comma</h2>

          <Media title="To protect the stray, can Singapore go the Indian way" text=" This feature article explores the success of one of India’s pet-yoga initiatives- PAWGA and asserts that Singapore’s socioeconomic and cultural make-up can support its embarkation on the same trajectory as India in this regard." url="https://utsocs.com/2023/10/25/to-protect-the-stray-can-singapore-go-the-indian-way/" />

          <Media title="The labyrinthine rhythms of my long(er)-distance relationship" text="Presenting to you, my reproduction of touched-up versions of two of the many embarrassing poems I wrote as a teenager- I Fear You and Don’t know. These ones are bare accounts of my relational fortune which is largely characterized by distance that keeps getting longer and longer with time." url="https://utsocs.com/2024/06/06/the-labyrinthine-rhythms-of-my-longer-distance-relationship/" />

        </div>

        <div>
          <h2 className="blog__publication-uts__subheading second-heading">The Vertigo</h2>

          <h4 className="temporary-filler">Coming Soon...</h4>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Publications