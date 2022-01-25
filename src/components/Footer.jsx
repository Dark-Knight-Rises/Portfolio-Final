import React from 'react';
import { SiGmail, SiInstagram, SiLinkedin } from 'react-icons/si'

function Footer() {
    return <div >
        <ul className='footer'>
            <li><h3>Contacts</h3></li>
            <a href="mailto:piyushat25@gmail.com">
                <li><SiGmail size={26} /></li>
            </a>
            <a href="https://www.linkedin.com/in/piyush-gaur-06a179197/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWAZh8xiDQ6aAK5hiddjLYQ%3D%3D">
                <li><SiLinkedin size={26} /></li>
            </a>
            <a href="https://www.instagram.com/_2piyush/">
                <li><SiInstagram size={26} /></li>
            </a>
        </ul>
    </div>;
}

export default Footer;
