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

export function EvaluateBookingForm() {
  return (
    <div>
        <link rel="stylesheet" href="https://demo.plantpot.works/assets/css/normalize.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <Header/>
    <div className="h1-heading">
      <h1>Reservation Request Evaluation</h1>
    </div>
    <div id="container">
      <div className="form-box">
        <div className='form'>
          <form  name="form" action="" method="post">

              <fieldset>
                <label className="form-label" for="reqNo">Request No<span className="form-required"> *</span></label>
                <input id="reqNo" className="form-input" type="text" name="reqNo" placeholder="Enter Request No" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" for="email">Email Address<span className="form-required"> *</span></label>
                <input id="email" className="form-input" type="email" name="email" placeholder="Enter email ID of resident" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" for="decision">Decision<span className="form-required"> *</span></label>
                <select name = "decision" className= "form-input" id ="decision" required>
                  <option value="Approve" className ="form-input">Approve</option>
                  <option value="Reject" className="form-input">Reject</option>
                  <option value="Waitlist" className="form-input">Waitlist</option>
                </select>
              </fieldset>

              <fieldset>
                <label className="form-label" for="comments">Comments</label>
                <input id="comments" className="form-input" type="text" name="comments" placeholder="Enter any comments or feedback"/>
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

// export default evaluateBookingForm;
