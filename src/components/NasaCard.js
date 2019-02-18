import React from 'react';
import './NasaCard.css';

export default ({
    title, 
    media_type, 
    date, 
    description, 
    author='',
    thumb='http://images-assets.nasa.gov/image/PIA12228/PIA12228~thumb.jpg'
}) => {
    return (
    <div className="item">

        <div className="media">
            {media_type === 'video' && <img className="play-icon" src="./images/play.png" alt=""/>} 
            <img className="thumb lightbox-photo" data-caption="First Photo Caption" src={thumb} alt="" />
        </div>

        <div className="line2">
            <div className="item">
                {author}
            </div>
            <div className="item">
                {date}
            </div>
        </div>

        <div className="line3">
            {title}
        </div>

        <div className="line4">
            {description}
        </div>

        <div className="line5">
            <button><i className="fa fa-heart"></i></button>
            <button><i className="fa fa-trash"></i></button>
            <button><i className="fa fa-pencil"></i></button>
        </div>
        
    </div>)
}