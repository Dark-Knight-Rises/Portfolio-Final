import React from 'react';
import example from './1.png'
function Cards() {
    return <div className='card'>
        <h3>Meme Generator</h3>
        <img src={example} className='card--img' alt="" />
    </div>;
}

export default Cards;
