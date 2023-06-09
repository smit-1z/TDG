// import logo from './logo.svg';
// import './occupantform.css';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './vehicleform.css';
import {Button} from "react-native";
import { Header } from '../Header/header';
import Chat from '../Chat/Chat';

export function VehicleRegistrationForm() {
  return (
    <div>
        <link rel="stylesheet" href="https://demo.plantpot.works/assets/css/normalize.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Header/>
        <div className="h1-heading">
          <h1>Vehicle Registration Form</h1>
        </div>
        <div id='containerv'>
          <div className="form-boxv">
            <div className='formv'>
              <form  name="form" action="" method="post">
                <fieldset>
                  <div className='form-label'><label className="form-label" htmlFor="email">Email Address<span className="form-required"> *</span></label></div>
                  <input id="email" className="form-input" type="email" name="email" placeholder="Email@gmail.com" required/>
                </fieldset>

                <fieldset>
                  <label className="form-label" htmlFor="veh">Vehicle Type<span className="form-required"> *</span></label>
                  <select name = "vehicle-type" className= "form-input" id ="vehicletype" required>
                    <option value="Car" className ="form-input">Car</option>
                    <option value="Bike" className="form-input">Bike</option>
                    <option value="Truck" className="form-input">Truck</option>
                  </select>
                </fieldset>

                <fieldset>
                  <label className="form-label" htmlFor="licenseplate">License Plate<span className="form-required"> *</span></label>
                  <input id="licenseplate" className="form-input" type="text" name="licenseplate" placeholder="ABC 123" required/>
                </fieldset>

                <div className="two-columns">
                  <button className="form-btnv" type="submit"><div className='t'>Submit</div></button>
                  <button className="form-btnv" type="reset">Cancel</button>
                </div>
            
            </form>
            </div>
          </div>
        </div>
        <Chat/>

        <section className="footer">
              <h3> FAQs </h3>
            
          
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

// export default vehicleRegistrationForm;
