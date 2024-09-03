import React from 'react'
import { Navbar, Footer } from '../../components'
import './Research.css'

const Research = () => {
  return (
    <div>
      <Navbar />
      <div className="blog__research-intro">
        <h1>RESEARCH</h1>
      </div>

      <div className="blog__research-content">
        <p>
        In the social media scholarship, the term ‘Content Creator’ generally refers to online actors that engage in the production and circulation of content on social media platforms. This thesis qualitatively analyzes a subset of content creators- family YouTube vloggers in India. Firstly, it considers whether the vloggers are using the platform to challenge gendered social constructions in Indian society or whether they are fabricating a sensational self-presentation to promote their own business interests. In doing so, it explicitly assesses the authenticity in the self-presentations of these vloggers. Secondly, it regards the interplay between creators and audience as a plausible sign of parasociality and asks whether this parasocial relationship facilitates changes in audience attitudes towards familial gender constructions. It does so by asking what motivates audiences to engage with the content and whether consumption influences their perceptions of gender in the familial context. In asking these questions, this study contributes to the social media scholarship by examining the effects of parasociality on the changing social fabric in India. It aims to contribute to the currently Western-centric digital media research by positioning the investigation on a digitally developing and socioculturally dynamic Southeast Asian nation like India. This study focuses on YouTube as a platform that has hosted Indian YouTubers and shaped the Indian popular culture since its launch and considering India’s present-day rapid digital transformation.   
        </p>
      </div>

      <div className="blog_research-youtube">
        <div className="blog__research-youtube__container">
          <h3>Youtube Video</h3>
          <iframe className="blog__research-iframe__container" src="https://www.youtube.com/embed/u73nVNmSxJo?si=ZXdcjsYtQt2XQPod" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          
          <p>
            An upcoming research project on the Indian vlogosphere. This project is a contribution to balancing the current Western-centricity of digital media research by basing its investigation on a digitally developing nation like India, and observing the manifestation of a change in the Indian social fabric in terms of familial gender constructions. 
          </p>
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Research