// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './occupantform.css';
import { Header } from '../Header/header';
import Chat from '../Chat/Chat';

export function MembershipForm() {
  return (
    <div>
        <link rel="stylesheet" type="text/css" href="https://demo.plantpot.works/assets/css/normalize.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Header/>
    
    <div className="h1-heading">
      <h1>Membership Form</h1>
    </div>
    <div id="container">
      <div className="form-box">
        <div className='form'>
          <form  name="form" action="" method="post">
            <div className="two-columns">
              <fieldset>
                <label className="form-label" for="first-name">First name<span className="form-required"> *</span></label>
                <input id="first-name" className="form-input" type="text" name="first-name" placeholder="Enter your first name" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" for="last-name">Last name<span className="form-required"> *</span></label>
                <input id="last-name" className="form-input" type="text" name="occupant-last-name" placeholder="Enter your last name" required/>
              </fieldset>
            </div>

            <fieldset>
              <label className="form-label" for="email">Email Address<span className="form-required"> *</span></label>
              <input id="email" className="form-input" type="email" name="email" placeholder="Email@gmail.com" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="facility">Facility<span className="form-required"> *</span></label>
              <select name = "facility" className= "form-input" id ="facility" required>
                <option value="Gym" className ="form-input">Gym</option>
                <option value="Tennis Court" className="form-input">Tennis Court</option>
              </select>
            </fieldset>

            <fieldset>
              <label className="form-label" for="noOfResidents">No of Residents<span className="form-required"> *</span></label>
              <input id="noOfResidents" className="form-input" type="number" min="1"  name="no-of-residents" placeholder="No of residents requiring membership" required/>
            </fieldset>


            <fieldset>
              <label className="form-label" for="duration">Duration<span className="form-required"> *</span></label>
              <select name = "duration" className= "form-input" id ="duration" required>
                <option value="3 Months" className ="form-input">3 Months</option>
                <option value="6 Months" className="form-input">6 Months</option>
                <option value="9 Months" className="form-input">9 Months</option>
                <option value="12 Months" className="form-input">12 Months</option>
                <option value="12 Months" className="form-input">18 Months</option>
              </select>
            </fieldset>

            <fieldset>
              <label className="form-label" for="startdt">Start Date<span className="form-required"> *</span></label>
              <input id="startdt" className="form-input" type="date" name="start-date" placeholder="05/31/2001" required/>
            </fieldset>

            <div className="two-columns">
              <button className="form-btn" type="submit">Submit</button>
              <button className="form-btn" type="reset">Cancel</button>
            </div>
            
          </form>
        </div>
        
      </div>
    </div>
    <Chat/>


  <section className="footer">
        <h3> FAQs </h3>
        {/* <!-- <p> </p> --> */}
    
        <div className ="icons">
            <i className = "fa fa-facebook-f"></i>
            <i className = "fa fa-instagram"></i>
            <i className = "fa fa-address-card"></i>
            <i className = "fa fa-at"></i>
        </div>
    </section>
  </div>
  );
}

// export default membershipForm;
