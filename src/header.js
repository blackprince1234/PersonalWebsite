import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import React from "react";
import {datas} from './pages/homescreen.js';


function clearAudio(){
    for(let d = 0; d < datas.length; d++){
        datas[d].audio.pause();
    }
}
const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/aboutme');
        clearAudio();
    }
    const handleClick2 = () => {
        navigate('/previouswork');
        clearAudio();
    }
    const handleClick3 = () => {
        navigate('/contactme');
        clearAudio();
    }


    // const handleClick = () => alert("Trying to navigate to difff page");
    return (
        <nav>
            <ul className="header" style={{height: '7vh', marginTop:'0px', fontSize:'7vh', color: "white"}}>
                <li>
                    <Link
                        activeClass="active"
                        onClick={handleClick}
                        to = "/mystats"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                        className="font"
                    >
                        About Me

                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        onClick={handleClick2}
                        spy={true}
                        smooth={true}
                        offset={-62}
                        duration={500}
                        className="font"

                    >
                        Previous Work
                    </Link>
                </li>
                <li>
                    <Link
                        activeClass="active"
                        onClick={handleClick3}
                        spy={true}
                        smooth={true}
                        offset={-62}
                        duration={500}
                        className="font"
                    >
                        Contact 
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
export default Header;