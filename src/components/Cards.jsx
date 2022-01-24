import React from 'react';
import example from './1.png'
function Cards() {
    return <div className='card'>
        <div>
            <h3>Meme Generator</h3>
            <img src={example} className='card--img' alt="" />
        </div>
        <div>
            <h3>Meme Generator 33334</h3>
            <img src={example} className='card--img' alt="" />
        </div>
    </div>;
}

export default Cards;
