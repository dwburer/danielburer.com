import Page from '../layouts/main'
import Nav from "../components/nav"

import "../scss/styles.scss"

export default () => (
    <Page>
        <Nav />
        <div className='profile'>
            <div className='profile__photo'>
                <img src="/static/portrait.jpg" alt="Pals" />
            </div>
            <div className='profile__text'>
                <h2>Hey, I’m Daniel. Right now I'm working as a full-stack developer in Statesboro, Georgia.</h2>
                <p>I’m currently pursing a Master of Science at the <a href="https://www.gatech.edu/" target="_blank">The Georgia Institute of Technology</a>, specializing in Machine Learning. Outside of work or school, I love working on side projects, producing music, and graphic design.</p>
                <p>Want to talk business, education, or anything else? Feel free to drop me an email or connect with me on <a href="https://www.linkedin.com/in/daniel-burer-452963118/" target="_blank">LinkedIn</a> and we'll be in touch.</p>
            </div>
        </div>
    </Page>
)
