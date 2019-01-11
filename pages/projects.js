import Page from '../layouts/main'
import Nav from "../components/nav";

export default () => (
    <Page>
        <Nav />
        <div className='projects'>
            <div className='project-card' style={{backgroundImage: 'url(/static/tobii.jpg)'}}>
                <div className="project-card__title">sEMG Neural Net</div>
                <div className='project-card__subtitle'>Classifying Multi-User Electromyographic Signals into Distinct Gestures: CNN vs LSTM</div>
                <div className="project-card__date">March 2018 | Georgia Southern University</div>
            </div>
            <div className='project-card' style={{backgroundImage: 'url(/static/net.jpeg)'}}>
                <div className="project-card__title">Gaming Control Using Gaze and Gestures</div>
                <div className='project-card__subtitle'>Investigation and integration of eye-tracking peripherals as alternative control schemes</div>
                <div className="project-card__date">March 2018 | Georgia Southern University</div>
            </div>
            <div className='project-card' style={{backgroundImage: 'url(/static/food.jpg)'}}>
                <div className="project-card__title">GoodHere</div>
                <div className='project-card__subtitle'>A lightweight crowd-reviewing social network concept for more granular product and service reviews</div>
                <div className="project-card__date">March 2018 | Georgia Southern University</div>
            </div>
        </div>
    </Page>
)
