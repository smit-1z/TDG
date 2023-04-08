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


export function AddWatchman() {
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
        <link rel="stylesheet" href="https://demo.plantpot.works/assets/css/normalize.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <Header/>
        <div className="h1-heading">
            <h1>Watchman Data Creation</h1>
        </div>
        <div id="container">
            <div className="form-box">
                <div className='form'>
                    <form name="form" action="" method="post" onSubmit={sumbitHandle}>
                        <div className="two-columns">
                            <fieldset>
                                <label className="form-label" for="reqNo">Wachman ID<span className="form-required"> *</span></label>
                                <input onChange={handleChange} id="id" className="form-input" type="text" name="id" placeholder="Enter Wachman ID"
                                    required/>
                            </fieldset>

                            <fieldset>
                            <label className="form-label" htmlFor="first-name">First name<span className="form-required"> *</span></label>
                            <input onChange={handleChange} id="first-name" className="form-input" type="text" name="watchman_firstname" placeholder="First name" required/>
                            </fieldset>

                            <fieldset>
                            <label className="form-label" htmlFor="last-name">Last name<span className="form-required"> *</span></label>
                            <input onChange={handleChange} id="last-name" className="form-input" type="text" name="Watchman_lastname" placeholder="Last name" required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="duty">Duty Type<span className="form-required"> </span></label>
                                <input onChange={handleChange} id="duty" className="form-input" type="text" name="duty" placeholder="Enter Duty Type"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="ssn">SSN<span className="form-required"> *</span></label>
                                <input onChange={handleChange} id="ssn" className="form-input" type="text" name="ssn" placeholder="Enter SSN"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="salary">Salary<span className="form-required"> *</span></label>
                                <input onChange={handleChange} id="salary" className="form-input" type="text" name="salary" placeholder="Enter Salary"
                                    required/>
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

        <section className="footer">
            <h3> FAQs </h3>
            {/* <!-- <p> </p> --> */}

            <div className="icons">
                <i className="fa fa-facebook-f"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-address-card"></i>
                <i className="fa fa-at"></i>
            </div>
        </section>
        <Chat/>
    </div>
  );
}

// export default addWatchman;
