// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './occupantform.css';
import Chat from '../Chat/Chat';




export function TennisMaintenance() {
  return (
    <div>
    
    <div className="h1-heading">
      <h1>Schedule Tennis Court  Maintenance</h1>
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
                  <input id="last-name" className="form-input" type="text" name="last-name" placeholder="Enter your last name" required/>
                </fieldset>
              </div>

              <fieldset>
                <label className="form-label" for="email">Email Address<span className="form-required"> *</span></label>
                <input id="email" className="form-input" type="email" name="email" placeholder="Email@gmail.com" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" for="maintenance">Maintenance Type<span className="form-required"> *</span></label>
                <select name = "maintenance" className= "form-input" id ="maintenance" required>
                  <option value="BasicCourtCleaning " className ="form-input">Basic Court Cleaning</option>
                  <option value="HandheldCourtVaccum" className="form-input">Handheld Court Vacuum Cleaning</option>
                  <option value="PressureCourtVaccum" className="form-input">Pressure Court Vaccum Cleaning</option>
                  <option value="RoboticCleaner" className="form-input">Robotic Court Cleaning</option>
                </select>
              </fieldset>

              <fieldset>
                  <label className="form-label" for="description">Description</label>
                  <input id="description" className="form-input" type="text" name="description" placeholder="Enter Description" required/>
                </fieldset>

              <fieldset>
                <label className="form-label" for="date">Date<span className="form-required"> *</span></label>
                <input id="date" className="form-input" type="date" name="date" placeholder="05/31/2001" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" for="time">Time<span className="form-required"> *</span></label>
                <input id="time" className="form-input" type="time" name="time" required/>
              </fieldset>

              <div className="two-columns">
                <button className="form-btn" type="submit">Schedule</button>
                <button className="form-btn" type="reset">Cancel</button>
              </div>
              
            </form>
        </div>
        
      </div>
    </div>

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
    <Chat/>
  </div>
  );
}

// export default tennisMaintenance;
