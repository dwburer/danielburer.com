import Particles from 'react-particles-js';

import Meta from '../components/meta'

// Order is important here
import "../scss/normalize.scss"
import "../scss/main.scss"
import "../scss/styles.scss"

let particleConfig = {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 700
            }
        },
        "color": {
            "value": "#7f8c8d"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#bdc3c7",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
};

export default ({ children }) => (
    <div>
        <Meta />
        <div className="content">
            { children }
            <div className='footer'>
                <div className="social">
                    <a href="https://www.linkedin.com/in/daniel-burer-452963118">
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                    <a href="https://github.com/dwburer">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="mailto:hire@dburer.com">
                        <i className="fas fa-envelope"></i> Email
                    </a>
                </div>
            </div>
        </div>
        <Particles
            className="particle-background"
            params={particleConfig} />
    </div>
);
