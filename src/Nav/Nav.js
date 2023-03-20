
import './Nav.css';
import {Link, NavLink} from 'react-router-dom';
import tdg from "../images/TDG.png";
function Nav() {
    return (
        <nav>
        <a href="/"> <img src={tdg}/></a>
        <div className ="nav-links" id="nav_links">
    
            <i className="fa fa-times" onclick="hide_menu()"></i>
            <div className='ul'>    
                <div className='li'><NavLink to="/">HOME</NavLink></div>
                <div className='li'><NavLink to="/AboutUS">ABOUT US</NavLink></div>
                <div className='li'><NavLink to="/Floor">FLOOR PLANS</NavLink></div>
                <div className='li'><NavLink to="/Amenities">AMENITIES</NavLink></div>
                <div className='li'><NavLink to="/Contact">CONTACT US</NavLink></div>
                <div className='li'><NavLink to="/Login">LOGIN</NavLink></div>
                <div className='li'><NavLink to="/NewSignup">SIGNUP</NavLink></div>
                <div className='li'><NavLink to="http://sxj6718.uta.cloud/">BLOG</NavLink></div>  
            </div>
        </div>
        <i className="fa fa-bars" onclick="show_menu()"></i>
    </nav>
    );
}

export default Nav;