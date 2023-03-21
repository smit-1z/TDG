
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
// import logo from './logo.svg';
import './home.css'
import { Header } from '../Header/header';
import {Link, NavLink} from 'react-router-dom';
import tdg from "../images/TDG.png";
import swimming from "../images/swimming.jpg"
import Nav from '../Nav/Nav';

export function AboutUs() {
  return (
    <div>
    <div className="sub-header">
        <Nav/>
        <section>
            <div className="about">
                <h1>ABOUT US </h1>
                <p> Terrazas de Guacuco is a resident complex.
                This is the modern residency with all modern amenities included.
                TDG is a visitor friendly community.It has the proper maps with the directions on it so visitors will not have any kind of inconvenience.</p>
                <Link to ='/' className='hero-button'>LEARN MORE</Link>
            </div>

        {/* <a href="index.html" className="hero-button"> LEARN MORE </a> */}
       {/* <Header/> */}
       </section>

<section className="about_us">
        {/* <div className="row">        */}
    <div className="column">
                    {/* <img src="images/swimming.jpg"/> */}
            {/* <img src="images/swimming.jpg"/> */}
        <img src={swimming}/>
    </div>
        {/* </div> */}
</section>
   
<section className="footer">
    <h3> FAQs </h3>

                    {/* <!-- These are the icons used in footer --> */}
    <div className ="icons">
        <i className = "fa fa-facebook-f"></i>
        <i className = " fa fa-instagram"></i>
        <i className = "fa fa-address-card"></i>
        <i className = "fa fa-at"></i>
    </div>

        
</section>

</div>
</div>
  );
}

// export default AboutUs;
