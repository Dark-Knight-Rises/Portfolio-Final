import React from 'react';
import { AiFillGithub, AiTwotoneHome, AiFillBook } from 'react-icons/ai'
import { SiVisualstudiocode } from 'react-icons/si'
function Navbar() {
    return <nav>
        <ul>
            <li><AiTwotoneHome /></li>
            <li><AiFillBook /></li>
            <li><AiFillGithub /></li>
            <li><SiVisualstudiocode /></li>
        </ul>
    </nav >;
}

export default Navbar;
