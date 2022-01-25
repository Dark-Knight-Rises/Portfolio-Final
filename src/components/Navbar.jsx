import React from 'react';
import { AiFillGithub, AiTwotoneHome, AiFillBook } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import pfp from '../pfp.jpg'

function Navbar() {
    return <nav>
        <ul>
            <a href="/">
                <li><AiTwotoneHome size={26} /></li>
            </a>
            <a href="/">
                <li><AiFillBook size={26} /></li>
            </a>
            <a href="https://github.com/Dark-Knight-Rises">
                <li><AiFillGithub size={26} /></li>
            </a>
            <a href="https://leetcode.com/piyushIsBatman/">
                <li><SiLeetcode size={26} /></li>
            </a>
            <li>
                <img src={pfp} alt="profile" className='pfp' />
            </li>
        </ul>
    </nav >;
}

export default Navbar;
