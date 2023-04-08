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

export function MembershipForm() {
  const navigate=useNavigate();
  const [inputs,setInputs] = useState({});
  const handleChange = (event) => {
    const name=event.target.name;
    const value=event.target.value;
    setInputs(values => ({...values,[name]:value}));
  }

  const sumbitHandle = (event) => {
    event.preventDefault();
    axios.post("http://localhost/api/occupant_table/user/save",inputs).then(function(response){
      console.log(response.data);
      navigate('/ResidentDashboard');

    });
  }
  return (
    <div>
        <link rel="stylesheet" type="text/css" href="https://demo.plantpot.works/assets/css/normalize.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Header/>
    
    <div className="h1-heading">
      <h1>Membership Form</h1>
    </div>
    <div id="container">
      <div className="form-box">
        <div className='form'>
          <form  name="form" action="" method="post" onSubmit={sumbitHandle}>
            <div className="two-columns">
              <fieldset>
                <label className="form-label" for="first-name">First name<span className="form-required"> *</span></label>
                <input onChange={handleChange} id="first-name" className="form-input" type="text" name="first_name" placeholder="Enter your first name" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" for="last-name">Last name<span className="form-required"> *</span></label>
                <input onChange={handleChange} id="last-name" className="form-input" type="text" name="occupant_last_name" placeholder="Enter your last name" required/>
              </fieldset>
            </div>

            <fieldset>
              <label className="form-label" for="email">Email Address<span className="form-required"> *</span></label>
              <input onChange={handleChange} id="email" className="form-input" type="email" name="email" placeholder="Email@gmail.com" required/>
            </fieldset>

            <fieldset>
              <label className="form-label" for="facility">Facility<span className="form-required"> *</span></label>
              <select onChange={handleChange} name = "facility" className= "form-input" id ="facility" required>
              <option value="" className ="form-input"></option>
                <option value="Gym" className ="form-input">Gym</option>
                <option value="Tennis Court" className="form-input">Tennis Court</option>
              </select>
            </fieldset>

            <fieldset>
              <label className="form-label" for="noOfResidents">No of Residents<span className="form-required"> *</span></label>
              <input onChange={handleChange} id="noOfResidents" className="form-input" type="number" min="1"  name="no_of_residents" placeholder="No of residents requiring membership" required/>
            </fieldset>


            <fieldset>
              <label className="form-label" for="duration">Duration<span className="form-required"> *</span></label>
              <select onChange={handleChange} name = "duration" className= "form-input" id ="duration" required>
              <option value="" className ="form-input"></option>
                <option value="3 Months" className ="form-input">3 Months</option>
                <option value="6 Months" className="form-input">6 Months</option>
                <option value="9 Months" className="form-input">9 Months</option>
                <option value="12 Months" className="form-input">12 Months</option>
                <option value="12 Months" className="form-input">18 Months</option>
              </select>
            </fieldset>

            <fieldset>
              <label className="form-label" for="startdt">Start Date<span className="form-required"> *</span></label>
              <input onChange={handleChange} id="startdt" className="form-input" type="date" name="start_date" placeholder="05/31/2001" required/>
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

// export default membershipForm;
