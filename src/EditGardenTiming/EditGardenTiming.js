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


export function EditGardenTiming() {
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
      console.log("hi");
      navigate('/GardenManager');

    });
  }
  return (
    <div>
        <link rel="stylesheet" href="https://demo.plantpot.works/assets/css/normalize.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <Header/>
    <div className="h1-heading">
      <h1>Garden Timings!</h1>
    </div>
    <div id="container">
      <div className="form-box">
        <div className='form'>
            <form name="form" action="" method="post" onSubmit={sumbitHandle}>
            <fieldset>
                <label className="form-label" for="email">Email Address<span className="form-required"> *</span></label>
                <input  onChange={handleChange} id="email" className="form-input" type="email" name="email" placeholder="Email@gmail.com" required/>
            </fieldset>

            <fieldset>
                <label className="form-label" for="days">Day<span className="form-required"> *</span></label>
                <select  onChange={handleChange} name = "days" className= "form-input" id ="days" required>
                <option value="Monday" className ="form-input">Monday</option>
                <option value="Tuesday" className="form-input">Tuesday</option>
                <option value="Wednesday" className="form-input">Wednesday</option>
                <option value="Thursday" className="form-input">Thursday</option>
                <option value="Friday" className="form-input">Friday</option>
                <option value="Saturday" className="form-input">Saturday</option>
                <option value="Sunday" className="form-input">Sunday</option>
                </select>
            </fieldset>

            <div className="two-columns">
                <fieldset>
                <label className="form-label" for="open-time">Open Time<span className="form-required"> *</span></label>
                <input  onChange={handleChange} id="open-time" className="form-input" type="time" name="opentime" required/>
                </fieldset>

                <fieldset>
                <label className="form-label" for="close-time">Close Time<span className="form-required"> *</span></label>
                <input  onChange={handleChange} id="close-time" className="form-input" type="time" name="closetime" required/>
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
