// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './occupantform.css';
import Chat from '../Chat/Chat';
import { Header } from '../Header/header';

export function EditPoolTiming() {
  return (
    <div>
    
      <link rel="stylesheet" href="https://demo.plantpot.works/assets/css/normalize.css"></link>
      <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <Header/>
      <div className="h1-heading">
        <h1>Pool Timings!</h1>
      </div>
      <div id="container">
        <div className="form-box">
          <div className='form'>
            <form name="form" action="" method="post">
              <div className="two-columns">
                <fieldset>
                  <label className="form-label" for="email">Email Address<span className="form-required"> *</span></label>
                  <input id="email" className="form-input" type="email" name="email" placeholder="Email@gmail.com" required/>
                </fieldset>

                <fieldset>
                  <label className="form-label" for="days">Day<span className="form-required"> *</span></label>
                  <select name = "days" className= "form-input" id ="days" required>
                    <option value="Monday" className ="form-input">Monday</option>
                    <option value="Tuesday" className="form-input">Tuesday</option>
                    <option value="Wednesday" className="form-input">Wednesday</option>
                    <option value="Thursday" className="form-input">Thursday</option>
                    <option value="Friday" className="form-input">Friday</option>
                    <option value="Saturday" className="form-input">Saturday</option>
                    <option value="Sunday" className="form-input">Sunday</option>
                  </select>
                </fieldset>
              </div>

              <div className="two-columns">
                <fieldset>
                  <label className="form-label" for="open-time">Open Time<span className="form-required"> *</span></label>
                  <input id="open-time" className="form-input" type="time" name="open-time" required/>
                </fieldset>

                <fieldset>
                  <label className="form-label" for="close-time">Close Time<span className="form-required"> *</span></label>
                  <input id="close-time" className="form-input" type="time" name="close-time" required/>
                </fieldset>
              </div>

              <div className="two-columns">
                <button className="form-btn" type="submit">SUBMIT</button>
                <button className="form-btn" type="reset">CANCEL</button>
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

// export default editPoolTiming;
