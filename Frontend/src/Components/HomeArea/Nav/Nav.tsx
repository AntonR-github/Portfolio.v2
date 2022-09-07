import "./Nav.css";
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiFillProject} from 'react-icons/ai'
import { useState } from "react";
function Nav(): JSX.Element {


    const [activeNav, setActiveNav] = useState('#')


    return (
        <div className="Nav">
			<a href="#header_socials" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiFillProject/></a>
        </div>
    );
}

export default Nav;
