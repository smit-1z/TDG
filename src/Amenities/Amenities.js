// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './home.css';
import {Link, NavLink} from 'react-router-dom';
import gym from "../images/gym.jpg";
import swimming from "../images/swimming.jpg";
import garden from "../images/garden.jpg";
import games from "../images/indoor-games.jpg";
import tdg from "../images/TDG.png";
import Nav from '../Nav/Nav';


export function Amenities() {
  return (
    <div>
    <div className="sub-header3">
    <Nav/>

        <section>
            <div className="amenity">
                <h1> AMENITIES </h1>
                <p> WE HAVE INDOOR AND OUTDOOR AMENITIES LIKE GYM, GARDEN AND POOL.</p>
                <Link to ='/' className='hero-button'>VIEW MORE</Link>
            </div>
        </section>


    {/* <!-- This section is for amenities included --> */}
<section className="amenities">
    
    <div className="amenity-col">
        <h2> GYM </h2>
        {/* <img src="images/gym.jpg"/> */}
        <img src={gym}/>
    </div>

    <div className="amenity-col">
        <h2> SWIMMING POOL </h2>
        {/* <img src="images/swimming.jpg"/> */}
        <img src={swimming}/>
    </div>

    <div className="amenity-col">
        <h2> GARDEN </h2>
        {/* <img src="images/garden.jpg"/> */}
        <img src={garden}/>
    </div>

    <div className="amenity-col">
        <h2> INDOOR GAMES </h2>
        {/* <img src="images/indoor-games.jpg"/> */}
        <img src={games}/>
    </div>
    
</section>

{/* <!-- https://fontawesome.com/icons/ --> */}
{/* <!-- Footer for all the icons  --> */}
<section className="footer">
    <h3> FAQs </h3>

    <div className ="icons">
        <i className = "fa fa-facebook-f"></i>
        <i className = " fa fa-instagram"></i>
        <i className = "fa fa-address-card"></i>
        <i className = "fa fa-at"></i>
    </div>

</section>

{/* <!-- Used javascript to write code for hiding and showing menu in homepage --> */}
{/* <script>
    var nav_links = document.getElementById("nav_links");
    function show_menu(){
        nav_links.style.right = "0";
    }
    function hide_menu(){
        nav_links.style.right = "-200px";
    }
</script> */}
</div>
</div>
  );
}

// export default amenities;
