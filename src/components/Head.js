import React from "react";
import { Link } from "react-router-dom";
import './Header.css';


const Head=()=>{
    return(


        <header className="header">
            
            <div className='logo'>
                <h1>Rai Tabish</h1>
            </div>
            <nav className="nav-links">
                <ul>
                    <li><Link to='/'> Home </Link></li>
                    <li><Link to='/experience'>Experience</Link></li>
                    <li><Link to= '/projects'>Projects</Link></li>
                    <li><Link to = '/reviews'> Reviews</Link></li>
                    <li><Link to = '/contact'>Contact</Link></li>
                </ul>
            </nav>
            
        </header>
    );
};

export default Head;
