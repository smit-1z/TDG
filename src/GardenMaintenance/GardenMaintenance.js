// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './occupantform.css';
import { Header } from '../Header/header';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export function GardenMaintenance() {
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
      // navigate('/ResidentDashboard');

    });
  }
  return (
    <div>
        <Header/>
    
    <div className="h1-heading">
      <h1>Schedule Garden Maintenance</h1>
    </div>
    <div id="container">
      <div className="form-box">
        <div className='form'>
          <form name="form" action="" method="post" onSubmit={sumbitHandle}>
            <div className="two-columns">
              <fieldset>
                <label className="form-label" for="first-name">First name<span className="form-required"> *</span></label>
                <input  onChange={handleChange} id="first-name" className="form-input" type="text" name="firstname" placeholder="Enter your first name" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" for="last-name">Last name<span className="form-required"> *</span></label>
                <input  onChange={handleChange} id="last-name" className="form-input" type="text" name="lastname" placeholder="Enter your last name" required/>
              </fieldset>
            </div>

            <fieldset>
              <label className="form-label" for="email">Email Address<span className="form-required"> *</span></label>
              <input  onChange={handleChange} id="email" className="form-input" type="email" name="email" placeholder="Email@gmail.com" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="maintenance">Maintenance Type<span className="form-required"> *</span></label>
              <select  onChange={handleChange}  name = "maintenance" className= "form-input" id ="maintenance" required>
              <option value=" " className ="form-input"></option>
                <option value="BasicGardenCleaning " className ="form-input">Basic Garden Cleaning</option>
                <option value="GrassMaintainance" className="form-input">Grass Maintainance</option>
                <option value="Water" className="form-input">Water the Plants or Grass</option>
                <option value="PlantationFertilization" className="form-input">Plantation/Fertilization</option>
                <option value="SeatingAreaMaintainance" className="form-input">Maintain the Seating Area</option>
              </select>
            </fieldset>

            <fieldset>
                <label className="form-label" for="description">Description</label>
                <input  onChange={handleChange} id="description" className="form-input" type="text" name="description" placeholder="Enter Description" required/>
              </fieldset>

            <fieldset>
              <label className="form-label" for="date">Date<span className="form-required"> *</span></label>
              <input  onChange={handleChange} id="date" className="form-input" type="date" name="date" placeholder="05/31/2001" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="time">Time<span className="form-required"> *</span></label>
              <input  onChange={handleChange} id="time" className="form-input" type="time" name="time" required/>
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
  </div>
  );
}

// export default gardenMaintenance;
