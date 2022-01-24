import React from 'react';
import { SiLeetcode, SiInstagram, SiLinkedin } from 'react-icons/si'

function Footer() {
    return <div >
        <ul className='footer'>
            <li><h3>Check me out</h3></li>
            <a href="https://leetcode.com/piyushIsBatman/">
                <li><SiLeetcode size={26} /></li>

            </a>
            <a href="">
                <li><SiLinkedin size={26} /></li>

            </a>
            <a href="">

                <li><SiInstagram size={26} /></li>
            </a>
        </ul>
    </div>;
}

export default Footer;
