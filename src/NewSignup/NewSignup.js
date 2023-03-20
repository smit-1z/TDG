// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './newSignup.css';
import { Header } from '../Header/header';

export function NewSignup() {
  return (
    <div>
    {/* <!-- Start of the header --> */}
    <div className="sub-header1">
        <Header/>
        {/* <!-- Start of the navigation bar --> */}
        {/* <nav>
            <a href="index.html"><img src ="TDG-logos.jpeg"/></a>
            <div className ="nav-links" id="nav_links">
                <i className="fa fa-times" onClick="hide_menu()"></i>
                <ul>
                  <li><a href="index.html"> HOME </a></li>
                  <li><a href="aboutus.html"> ABOUT US </a></li>
                  <li><a href="floor.html"> FLOOR PLANS </a></li>
                  <li><a href="amenities.html"> AMENITIES </a></li>
                  <li><a href="contact.html"> CONTACT US </a></li>
                  <li><a href="login.html"> LOGIN </a></li>
              </ul>
            </div>
            <i className="fa fa-bars" onClick="show_menu()"></i>
        </nav> */}
        {/* <!-- End of the navigation bar --> */}
        </div>
        {/* <!-- End of the header --> */}
    <div className="h1-heading">
      <h1>Registration Form</h1>
    </div>
    <div id="container">
        {/* <!-- Code for the REgistration form --> */}
      <div className="form-box">
        <div className='form'>
          <form name="form" action="" method="post">
            <div className="two-columns">
              <fieldset>
                <label className="form-label" htmlFor="first-name">First name<span className="form-required"> *</span></label>
                <input id="first-name" className="form-input" type="text" name="first-name" placeholder="first name" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" htmlFor="last-name">Last name<span className="form-required"> *</span></label>
                <input id="last-name" className="form-input" type="text" name="last-name" placeholder="last name" required/>
              </fieldset>
            </div>
            <fieldset>
              <label className="form-label" htmlFor="username">Username<span className="form-required"> *</span></label>
              <input id="last-name" className="form-input" type="text" name="username" placeholder="abc123" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="dob">DOB<span className="form-required"> *</span></label>
              <input id="dob" className="form-input" type="date" name="occupant-dob" placeholder="05/31/2001" required/>
            </fieldset> 

            <fieldset>
              <label className="form-label" htmlFor="gender">Gender<span className="form-required"> *</span></label>
              <input id="gender" className="form-input" type="text" name="gender" placeholder="Gender" required/>
            </fieldset>
            
            <fieldset>
              <label className="form-label" htmlFor="email">Email address<span></span></label>
              <input id="email" className="form-input" type="email" name="email" placeholder="Email@gmail.com" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="mobile">Mobile No<span></span></label>
              <input id="email" className="form-input" type="text" name="occupant-mobile" placeholder="Enter mobile no" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="relation">Relation<span className="form-required"> *</span></label>
              <input id="relation" className="form-input" type="text" name="your-relation" placeholder="Enter relation with occupant" required/>
            </fieldset>
            <fieldset>
              <label className="form-label" htmlFor="password">Password<span className="form-required"> *</span></label>
              <input id="last-name" className="form-input" type="password" name="password" placeholder="#####" required/>
            </fieldset>
            <fieldset>
              <label className="form-label" htmlFor="password">Confirm Password<span className="form-required"> *</span></label>
              <input id="last-name" className="form-input" type="password" name="password" placeholder="#####" required/>
            </fieldset>

            {/* <!-- Dropdown for role selection --> */}

            <fieldset>
                <label className="form-label" htmlFor="role">Choose a Role<span className="form-required"> *</span></label>
                <select name = "Role" className= "form-input" id ="role" required>
                  <option value="Resident">Resident</option>
                  <option value="Renter">Renter</option>
                  <option value="Visitor">Visitor</option>
                  <option value="Manager">Pool Manager</option>
                  <option value="Manager">Garden Manager</option>
                  <option value="Manager">Security Manager</option>
                  <option value="Manager">Tennis court Manager</option>
                </select>
              </fieldset>

            {/* <!-- Add and Cancel buttons --> */}
            <div className="two-columns">
              <button className="form-btn" type="submit">Add</button>
              <button className="form-btn" type="reset">Cancel</button>
            </div>
            
          </form>
        </div>
        {/* <!-- End of the Registration form --> */}
      </div>
    </div>
     {/* <!-- code for the footer icons and FAQs --> */}
     <section className="footer">
        <h3> FAQs </h3>
        {/* <!-- <p> </p> --> */}
    
        <div className ="icons">
            <i className = "fa fa-facebook-f"></i>
            <i className = " fa fa-instagram"></i>
            <i className = "fa fa-address-card"></i>
            <i className = "fa fa-at"></i>
        </div> 
    </section>
        {/* <!-- End of the footer --> */}
  </div>
  );
}

// export default new_signup;
