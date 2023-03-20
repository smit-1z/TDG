// import logo from './logo.svg';
// import { AboutUs } from '../AboutUs/AboutUs';
// import './style.css';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './home.css';
import { Header } from '../Header/header';
import {Link, NavLink} from 'react-router-dom';
import tdg from "../images/TDG.png";
import Nav from '../Nav/Nav';


export function Home() {
  return (
    <div>
    <div className="homepage">
        <Nav/>
       {/* <Header/> */}
    </div> 
    <section>
        {/* <!-- Used a text box in the homepage --> */}
        <div className="text-box">
            <h1> TERRAZAS DE GUACUCO </h1>
            <Link to ='/' className='hero-button'>VISIT US ONCE TO KNOW MORE AND YOU WILL LOVE HERE</Link>
            {/* <a href="index.html" className="hero-button"> VISIT US ONCE TO KNOW MORE AND YOU WILL LOVE HERE </a> */}
        </div>
    </section>

{/* <!-- https://fontawesome.com/icons/ --> */}
{/* <!-- Footer for all the icons  --> */}
    <section className="footer">
        {/* <!-- Kept Frequently Asked Questions in Footer --> */}
        <h3> FAQs </h3>

        {/* <!-- These are the icons used in footer --> */}
        <div className ="icons">
            <i className = "fa fa-facebook-f"></i>
            <i className = " fa fa-instagram"></i>
            <i className = "fa fa-address-card"></i>
            <i className = "fa fa-at"></i>
        </div>
    </section>

{/* <script>
    // Used javascript to write code for hiding and showing menu in homepage
    var nav_links = document.getElementById("nav_links");
    
    function show_menu(){
        nav_links.style.right = "0";
    }

    function hide_menu(){
        nav_links.style.right = "-200px";
    }
</script> */}
</div>
  );
}

// export default index;
