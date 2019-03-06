import React from "react";

import Page from '../layouts/main'
import Nav from "../components/nav"

import "../scss/styles.scss"

class About extends React.Component {

    componentDidMount () {
        About.handleScroll();
        window.addEventListener('scroll', About.handleScroll);

        About.lazyLoadImages();
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', About.handleScroll);
    }

    static handleScroll () {
        let contentHeight = document.querySelector('.profile__text').getBoundingClientRect().top;
        let scrollIndicator = document.querySelector('#scrollIndicator');

        // If the profile text is below the bottom 1/4 of the screen
        if (contentHeight < (window.innerHeight * 0.75)) {
            if (!scrollIndicator.classList.contains('no-indicator')) {
                scrollIndicator.classList.add('no-indicator');
            }
        } else {
            if (scrollIndicator.classList.contains('no-indicator')) {
                scrollIndicator.classList.remove('no-indicator');
            }
        }
    }

    static lazyLoadImages() {
        let profilePhoto = document.querySelector('#profilePhoto');
        let fullResPhoto = new Image();

        fullResPhoto.src = profilePhoto.dataset.lazyLoad;
        fullResPhoto.onload = function() {
            profilePhoto.classList.remove('unloaded');
            profilePhoto.src = fullResPhoto.src;
        };
    }

    render () {
        return (
            <Page>
                <Nav />
                <div className='profile'>
                    <div className='profile__photo'>
                        <div className='profile__photo__wrapper'>
                            <img id='profilePhoto' data-lazy-load="/static/portrait.jpg" className="unloaded" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAYABgAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABgAAAAAQAAAGAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACAAAAAA/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/AABEIACAAIAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/3QAEAAL/2gAMAwEAAhEDEQA/APlb4tfsX+MPhh8fNC+FKz6frGva3HDLYTW0/lwyJJ5nzPuGY9vkyk5B4XI3ZxXsPwQ/YU0/4hfDvxrf6h4s0y31zw7LPA9nayieNjFkM3mcZXcCoIHbtXxjJ428QXviGDW21jUpdZg2GK/e9me4j2DC4lLl1AGcYYYBOMZNev8AhX4narBpb+G49Xbw8dau4hPqt4X8u1szGHmJ4GQWAPJyd+MgHI8XHU8U7Rpy0/H8O2j21se9l9TDLmlOOv3r8e+q8rm34Z/Yg8c+NvEGj6VYQWX23xDZte6PDLfqhaAMD58+1XMSFAxUcltykhea+f8AxV4WvvBniXV9C1VEt9R0q8nsLqNZA4SaGRo5BkdQGRue45rtfH3jXxD4U8dxQaZ4o1FoNEjSHSL2zu57crbmIFHiIYOgZXPAPGSo44rz9dYnOsR6jcSNczi5W5kedjI0jCQOSxY5JJySSckkknk161HmcE29/wDI8rEun7VqCsl/mf/Q/Oez8M3ct5b2oju7dZlR5jcQNAVXPYH7w64Pc9uK7vxbcRalZS2Gn2qabPp8Wxp7jKedGACVRvQBVJJ68CstJr/WbKTVxbzw2VxcG1juWmzGk4Acxxl3JGAQ4Tpg55GayvEK3Lw3zXM7y3syh7jI2rsTnhc8Anb04NeVJzqVouTtbb1636PT+up68fZ06UlFXv8Al0t1Wv8AXQ5OWeS42NI7yMFCguxJAHQc9h0x2q1opsodRibUTdLa4O5rMIZVOPlKh/lOGAyDjIzyDitjTdIEWni4k0xbl5iqIJ5HXZgqS2MKMMp4ILEenOasf8S27jvjfQaVYyMzoJEkZmhIxgRRKyqceo5OT6163N0PH5Xuf//Z" alt="Me" />
                        </div>
                        <div id='scrollIndicator' className="no-indicator"><i className="fas fa-angle-down"></i></div>
                    </div>
                    <div className='profile__text'>
                        <h2>Hey, I’m Daniel. Right now I'm working as a full-stack developer in Statesboro, Georgia.</h2>
                        <p>I’m also currently pursing a Master of Science at the <a href="https://www.gatech.edu/" target="_blank">The Georgia Institute of Technology</a>, specializing in Machine Learning. Outside of work or school, I love working on side projects, producing music, and graphic design.</p>
                        <p>Want to talk business, education, or anything else? Feel free to drop me an <a href="mailto:hire@dburer.com">email</a> or connect with me on <a href="https://www.linkedin.com/in/daniel-burer-452963118/" target="_blank">LinkedIn</a> and we'll be in touch.</p>
                    </div>
                </div>
            </Page>
        )
    }
}

export default About
