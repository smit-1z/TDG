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


export function MaintenanceRequestForm() {
  return (
    <div>
        <link rel="stylesheet" type="text/css" href="https://demo.plantpot.works/assets/css/normalize.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Header/>
    <div className="h1-heading">
      <h1>Request Maintenance</h1>
    </div>
    <div id="container">
      <div className="form-box">
        <div className='form'>
          <form  name="form" action="" method="post">
            <div className="two-columns">
              <fieldset>
                <label className="form-label" htmlFor="first-name">First name<span className="form-required"> *</span></label>
                <input id="first-name" className="form-input" type="text" name="first-name" placeholder="Enter your first name" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" htmlFor="last-name">Last name<span className="form-required"> *</span></label>
                <input id="last-name" className="form-input" type="text" name="last-name" placeholder="Enter your last name" required/>
              </fieldset>
            </div>

            <fieldset>
              <label className="form-label" htmlFor="email">Email Address<span className="form-required"> *</span></label>
              <input id="email" className="form-input" type="email" name="email" placeholder="Email@gmail.com" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="adress-1">Address Line 1<span className="form-required"> *</span></label>
              <input id="adress-1" className="form-input" type="text" name="adress-1" placeholder="Your address here" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="adress-2">Address Line 2<span className="form-required"> *</span></label>
              <input id="adress-2" className="form-input" type="text" name="adress-2" placeholder="Apt No" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="maintenance">Maintenance Type<span className="form-required"> *</span></label>
              <select name = "maintenance" className= "form-input" id ="maintenance" required>
                <option value="Pest Control" className ="form-input">Pest Control</option>
                <option value="Water Drainage" className="form-input">Water Drainage</option>
                <option value="Plumbing" className="form-input">Plumbing</option>
                <option value="AC/Thermostat" className="form-input">AC/Thermostat</option>
                <option value="Smoke Detector" className="form-input">Smoke Detector</option>
                <option value="Electricity" className="form-input">Electricity</option>
              </select>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="emergency-level">Emergency Level(0 - 10)<span className="form-required"> *</span></label>
              <input id="emergency-level" className="form-input" type="number" min="1" max="10" name="emergency-level" placeholder="Emergency level - 10 being most urgent" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="date">Date<span className="form-required"> *</span></label>
              <input id="date" className="form-input" type="date" name="date" placeholder="05/31/2001" required/>
            </fieldset>

            <div className="two-columns">
              <button className="form-btn" type="submit">Request</button>
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

// export default maintenanceRequestForm;
