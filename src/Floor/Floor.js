// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './home.css';
import {Link, NavLink} from 'react-router-dom';
import cabins from "../images/cabin.jpg";
import TOWNHOUSE1 from "../images/townhouse.jpg";
import STUDIO from "../images/studio.jpg";
import tdg from "../images/TDG.png";
import Nav from '../Nav/Nav';


export function Floor() {
  return (
    <div>
    <div className="sub-header2">
    <Nav/>

        <section>
            <div className="plan">
                <h1> FLOOR PLANS  </h1>
                <p> WE HAVE STUDIO APARTMENTS, TOWNHOUSES AND CABIN APARTMENTS</p>
                <Link to ='/' className='hero-button'>LEARN MORE</Link>
            </div>
        </section>
        
        
        {/* <a href="index.html" className="hero-button"> LEARN MORE </a> */}
   
    {/* </section> */}

    {/* <!-- This section gives details of the floor plans --> */}
    <section className="floor">
        <div className="floor-column">
            <h2> STUDIO APARTMENTS</h2>
          
            <img src={STUDIO}/>
        </div>
        <div className="floor-column">
            <h2> TOWNHOUSE </h2>
           
            <img src={TOWNHOUSE1}/>
        </div>
        <div className="floor-column">
            <h2> CABINS </h2>
            
           
            <img src={cabins} />
           
        </div>
        
    </section>

{/* <!-- https://fontawesome.com/icons/ --> */}
{/* <!-- Footer for all the icons  --> */}
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

// export default floor;
