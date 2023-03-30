import './header.css';
import {Link, NavLink} from 'react-router-dom';
export function Header() {
  return (
    <div>
        <link rel="stylesheet" type="text/css" href="https://demo.plantpot.works/assets/css/normalize.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div className="temp">
            <div className='nav'>
                <div className ="nav-links" id="nav_links">
                    <div className='ul'>
                        <div className='li'><NavLink to="/">HOME</NavLink></div>
                        <div className='li'><NavLink to="/AboutUS">ABOUT US</NavLink></div>
                        <div className='li'><NavLink to="/Floor">FLOOR</NavLink></div>
                        <div className='li'><NavLink to="/Amenities">AMENITIES</NavLink></div>
                        <div className='li'><NavLink to="/Contact">CONTACT</NavLink></div>
                        <div className='li'><NavLink to="/Login">LOGIN</NavLink></div>
                        <div className='li'><NavLink to="/NewSignUP">SIGNUP</NavLink></div>
                        <div className='li'><NavLink to="http://sxj6718.uta.cloud/">BLOG</NavLink></div>
                        {/* <div className='li'><a href="ResidentDashboard.html">DASHBOARD</a></div> */}
                        <div className='li'><NavLink to="/Login">LOGOUT</NavLink></div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  );
}
