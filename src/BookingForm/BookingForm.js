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

export function BookingForm() {
  return (
    <div>
        <link rel="stylesheet" type="text/css" href="https://demo.plantpot.works/assets/css/normalize.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Header/>
    <div className="h1-heading">
      <h1>Reserve Your Venue Now!</h1>
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
                <input id="last-name" className="form-input" type="text" name="occupant-last-name" placeholder="Enter your last name" required/>
              </fieldset>
            </div>

            <fieldset>
              <label className="form-label" htmlForr="email">Email Address<span className="form-required"> *</span></label>
              <input id="email" className="form-input" type="email" name="email" placeholder="Email@gmail.com" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="facility">Facility<span className="form-required"> *</span></label>
              <select name = "facility" className= "form-input" id ="facility" required>
                <option value="Garden" className ="form-input">Garden</option>
                <option value="Pool" className="form-input">Pool</option>
                <option value="Clubhouse" className="form-input">Clubhouse</option>
              </select>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="guestnos">No of Guests<span className="form-required"> *</span></label>
              <input id="guesnos" className="form-input" type="number" min="1" max="500" name="no-of-guests" placeholder="No of Guests" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlForr="date">Date<span className="form-required"> *</span></label>
              <input id="date" className="form-input" type="date" name="date" placeholder="05/31/2001" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="start-time">Start Time<span className="form-required"> *</span></label>
              <input id="start-time" className="form-input" type="time" name="start-time" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="end-time">End Time<span className="form-required"> *</span></label>
              <input id="end-time" className="form-input" type="time" name="end-time" required/>
            </fieldset>

            <div className="two-columns">
              <button className="form-btn" type="submit">Reserve</button>
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

// export default bookingForm;
