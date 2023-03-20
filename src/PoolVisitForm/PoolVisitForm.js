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

export function PoolVisitForm() {
  return (
    <div>
      <link rel="stylesheet" href="https://demo.plantpot.works/assets/css/normalize.css"></link>
      <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <Header/>
      <div className="h1-heading">
        <h1>Register Pool Visitors</h1>
      </div>
      <div id="container">
        <div className="form-box">
          <div className='form'>
            <form name="form" action="" method="post">
              <div className="two-columns">
                <fieldset>
                  <label className="form-label" for="first-name">Name<span className="form-required"> *</span></label>
                  <input id="first-name" className="form-input" type="text" name="first-name" placeholder="Enter your Name" required />
                </fieldset>

                <fieldset>
                  <label className="form-label" for="visitoremail">Visitor Email Address<span className="form-required"> *</span></label>
                  <input id="vistoremail" className="form-input" type="email" name="visitoremail" placeholder="Email@gmail.com" required/>
                </fieldset>

                <fieldset>
                  <label className="form-label" for="residentemail">Resident Email Address<span className="form-required"> *</span></label>
                  <input id="residentemail" className="form-input" type="email" name="residentemail" placeholder="Email@gmail.com" required/>
                </fieldset>

                <fieldset>
                  <label className="form-label" for="apartmentNo">Apartment No<span className="form-required"> *</span></label>
                  <input id="apartmentNo" className="form-input" type="text" name="apartmentNo" placeholder="Host Apartment No here" required/>
                </fieldset>

                <fieldset>
                  <label className="form-label" for="date">Date<span className="form-required"> *</span></label>
                  <input id="date" className="form-input" type="date" name="date" placeholder="05/31/2001" required/>
                </fieldset>

                <fieldset>
                  <label className="form-label" for="in-time">In Time<span className="form-required"> *</span></label>
                  <input id="in-time" className="form-input" type="time" name="in-time" required/>
                </fieldset>

                <fieldset>
                  <label className="form-label" for="out-time">Out Time<span className="form-required"> *</span></label>
                  <input id="out-time" className="form-input" type="time" name="out-time" required/>
                </fieldset>
              </div>

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

// export default poolVisitForm;
