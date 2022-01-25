import React from 'react';
import example from './1.png'
function Cards(props) {
    return <div className='card'>
        <div>
            <h3 className='card--title'>{props.name}</h3>
            <a href={props.link}>
                <img src={props.image} className='card--img' alt="" />
            </a>
        </div>
    </div>;
}

export default Cards;
