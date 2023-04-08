// import logo from './logo.svg';
import './occupantform.css';
import { Header } from '../Header/header';
import Chat from '../Chat/Chat';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function PoolMaintenance() {
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
      navigate('/PoolManager');

    });
  }
  return (
    <div>

      
      <link rel="stylesheet" href="https://demo.plantpot.works/assets/css/normalize.css"></link>
      <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <Header/>
      <div className="h1-heading">
        <h1>Schedule Pool Maintenance</h1>
      </div>
      <div id="container">
        <div className="form-box">
          <div className='form'>
            <form name="form" action="" method="post" onSubmit={sumbitHandle}>
              <div className="two-columns">
                <fieldset>
                  <label className="form-label" for="first-name">First name<span className="form-required"> *</span></label>
                  <input onChange={handleChange} id="first-name" className="form-input" type="text" name="firstname" placeholder="Enter your first name" required/>
                </fieldset>

                <fieldset>
                  <label className="form-label" for="last-name">Last name<span className="form-required"> *</span></label>
                  <input onChange={handleChange} id="last-name" className="form-input" type="text" name="lastname" placeholder="Enter your last name" required/>
                </fieldset>
              </div>

              <fieldset>
                <label className="form-label" for="email">Email Address<span className="form-required"> *</span></label>
                <input onChange={handleChange} id="email" className="form-input" type="email" name="email" placeholder="Email@gmail.com" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" for="maintenance">Maintenance Type<span className="form-required"> *</span></label>
                <select onChange={handleChange} name = "maintenance" className= "form-input" id ="maintenance" required>
                <option value=" " className ="form-input"></option>
                  <option value="BasicPoolCleaning " className ="form-input">Basic Pool Cleaning</option>
                  <option value="HandheldPoolVaccum" className="form-input">Handheld Pool Vacuum Cleaning</option>
                  <option value="PressurePoolVaccum" className="form-input">Pressure Pool Vaccum Cleaning</option>
                  <option value="AutomaticSuction" className="form-input">Automatic Suction Vaccum Cleaning</option>
                  <option value="RoboticCleaner" className="form-input">Robotic Pool Cleaning</option>
                </select>
              </fieldset>

              <fieldset>
                  <label className="form-label" for="description">Description</label>
                  <input onChange={handleChange} id="description" className="form-input" type="text" name="description" placeholder="Enter Description" required/>
                </fieldset>

              <fieldset>
                <label className="form-label" for="date">Date<span className="form-required"> *</span></label>
                <input onChange={handleChange} id="date" className="form-input" type="date" name="date" placeholder="05/31/2001" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" for="time">Time<span className="form-required"> *</span></label>
                <input onChange={handleChange} id="time" className="form-input" type="time" name="time" required/>
              </fieldset>

              <div className="two-columns">
                <button className="form-btn" type="submit">Schedule</button>
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

// export default poolMaintenance;
