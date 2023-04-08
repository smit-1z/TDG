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
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export function ManagerVisitorForm() {
  const navigate=useNavigate();
  const [inputs,setInputs] = useState({});
  const handleChange = (event) => {
    const name=event.target.name;
    const value=event.target.value;
    setInputs(values => ({...values,[name]:value}));
  }

  const sumbitHandle = (event) => {
    event.preventDefault();
    axios.post("http://localhost/api/user/save",inputs).then(function(response){
      console.log(response.data);
      navigate('/BuildingManagerDashboard');

    });
  }
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
          <form  name="form" action="" method="post" onSubmit={sumbitHandle}>
            <div className="two-columns">
              <fieldset>
                <label className="form-label" for="first-name">First name<span className="form-required"> *</span></label>
                <input onChange={handleChange} id="first-name" className="form-input" type="text" name="firstname" placeholder="Enter first name" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" for="last-name">Last name<span className="form-required"> *</span></label>
                <input onChange={handleChange} id="last-name" className="form-input" type="text" name="lastname" placeholder="Enter last name" required/>
              </fieldset>
            </div>

            <fieldset>
              <label className="form-label" for="email">Email Address<span className="form-required"> *</span></label>
              <input onChange={handleChange} id="email" className="form-input" type="email" name="email" placeholder="Visitor's Email Address" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="dob">DOB<span className="form-required"> *</span></label>
              <input onChange={handleChange} id="dob" className="form-input" type="date" name="dob" placeholder="05/31/2001" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="govtid">Govt ID<span className="form-required"> *</span></label>
              <input onChange={handleChange} id="govtid" className="form-input" type="text" name="govtid" placeholder="Enter Visitor's DL here" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="contactno">Contact No<span className="form-required"> *</span></label>
              <input onChange={handleChange} id="contactno" className="form-input" type="text" name="mobile" placeholder="Enter Contact No here" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="vehicletype">Vehicle Type<span className="form-required"> *</span></label>
              <select onChange={handleChange} name = "vehicletype" className= "form-input" id ="vehicletype" required>
                <option value="" className ="form-input"></option>
                <option value="Car" className ="form-input">Car</option>
                <option value="Bike" className="form-input">Bike</option>
                <option value="Truck" className="form-input">Truck</option>
              </select>
            </fieldset>

            <fieldset>
              <label className="form-label" for="licenseplate">License Plate<span className="form-required"> *</span></label>
              <input onChange={handleChange} id="licenseplate" className="form-input" type="text" name="licenseplate" placeholder="Enter Visitor's Vehicle License Plate" required/>
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
