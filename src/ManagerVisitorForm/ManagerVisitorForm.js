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


export function ManagerVisitorForm() {
  return (
    <div>
      <link rel="stylesheet" type="text/css" href="https://demo.plantpot.works/assets/css/normalize.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Header/>
    <div className="h1-heading">
      <h1>New Visitor Form</h1>
    </div>
    <div id="container">
      <div className="form-box">
        <div className='form'>
          <form  name="form" action="" method="post">
            <div className="two-columns">
              <fieldset>
                <label className="form-label" for="first-name">First name<span className="form-required"> *</span></label>
                <input id="first-name" className="form-input" type="text" name="first-name" placeholder="Enter first name" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" for="last-name">Last name<span className="form-required"> *</span></label>
                <input id="last-name" className="form-input" type="text" name="occupant-last-name" placeholder="Enter last name" required/>
              </fieldset>
            </div>

            <fieldset>
              <label className="form-label" for="email">Email Address<span className="form-required"> *</span></label>
              <input id="email" className="form-input" type="email" name="email" placeholder="Visitor's Email Address" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="dob">DOB<span className="form-required"> *</span></label>
              <input id="dob" className="form-input" type="date" name="dob" placeholder="05/31/2001" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="govtid">Govt ID<span className="form-required"> *</span></label>
              <input id="govtid" className="form-input" type="text" name="govtid" placeholder="Enter Visitor's DL here" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="contactno">Contact No<span className="form-required"> *</span></label>
              <input id="contactno" className="form-input" type="text" name="contactno" placeholder="Enter Contact No here" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="vehicletype">Vehicle Type<span className="form-required"> *</span></label>
              <select name = "vehicletype" className= "form-input" id ="vehicletype" required>
                <option value="Car" className ="form-input">Car</option>
                <option value="Bike" className="form-input">Bike</option>
                <option value="Truck" className="form-input">Truck</option>
              </select>
            </fieldset>

            <fieldset>
              <label className="form-label" for="licenseplate">License Plate<span className="form-required"> *</span></label>
              <input id="licenseplate" className="form-input" type="text" name="licenseplate" placeholder="Enter Visitor's Vehicle License Plate" required/>
            </fieldset>
            
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

// export default managerVisitorForm;
