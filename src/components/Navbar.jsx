import React from 'react';
import { AiFillGithub, AiTwotoneHome, AiFillBook } from 'react-icons/ai'
import { SiVisualstudiocode } from 'react-icons/si'
import pfp from '../pfp.jpg'

function Navbar() {
    return <nav>
        <ul>
            <a href="/">
                <li><AiTwotoneHome size={23} /></li>
            </a>
            <a href="/">
                <li><AiFillBook size={23} /></li>
            </a>
            <a href="/">
                <li><AiFillGithub size={23} /></li>
            </a>
            <a href="/">
                <li><SiVisualstudiocode size={23} /></li>
            </a>
            <li>
                <img src={pfp} alt="profile" className='pfp' />
            </li>
        </ul>
    </nav >;
}

export default Navbar;
