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


export function OccupantForm() {
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
      <link rel="stylesheet" href="https://demo.plantpot.works/assets/css/normalize.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <Header/>
    <div className="h1-heading">
      <h1>Add Occupant Details</h1>
    </div>
    <div id="container">
      <div className="form-box">
        <div className='form'>
          <form name="form" action="" method="post" onSubmit={sumbitHandle}>
            <div className="two-columns">
              <fieldset>
                <label className="form-label" htmlFor="first-name">First name<span className="form-required"> *</span></label>
                <input onChange={handleChange} id="first-name" className="form-input" type="text" name="occupant_firstname" placeholder="Occupant's first name" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" htmlFor="last-name">Last name<span className="form-required"> *</span></label>
                <input onChange={handleChange} id="last-name" className="form-input" type="text" name="occupant_lastname" placeholder="Occupant's last name" required/>
              </fieldset>
            </div>

            <fieldset>
              <label class="form-label" for="dob">DOB<span class="form-required"> *</span></label>
              <input onChange={handleChange} id="dob" class="form-input" type="date" name="occupant_dob" placeholder="05/31/2001" required/>
            </fieldset>

            <fieldset>
              <label class="form-label" for="gender">Gender<span class="form-required"> *</span></label>
              <input onChange={handleChange} id="gender" class="form-input" type="text" name="occupant_gender" placeholder="Occupant's Gender" required/>
            </fieldset>
          
            <fieldset>
              <label class="form-label" for="email">Email address<span></span></label>
              <input onChange={handleChange} id="email" class="form-input" type="email" name="occupant_email" placeholder="Email@gmail.com" required/>
            </fieldset>

            <fieldset>
              <label class="form-label" for="mobile">Mobile No<span></span></label>
              <input onChange={handleChange} id="email" class="form-input" type="text" name="occupant_mobile" placeholder="Enter mobile no" required/>
            </fieldset>

            <fieldset>
              <label class="form-label" for="relation">Relation<span class="form-required"> *</span></label>
              <input onChange={handleChange} id="relation" class="form-input" type="text" name="your_relation" placeholder="Enter relation with occupant" required/>
            </fieldset>

            <div className="two-columns">
              <button className="form-btn" type="submit">Add</button>
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
    <Chat/>
  </div>
  );
}

// export default occupantForm;
