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



export function AddViolation() {
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
            <h1>Add Violation Data</h1>
        </div>
        <div id="container">
            <div className="form-box">
                <div className='form'>
                    <form name="form" action="" method="post" onSubmit={sumbitHandle}>
                        <div className="two-columns">
                            <fieldset>
                                <label className="form-label" for="reqNo">Resident ID<span className="form-required"> *</span></label>
                                <input onChange={handleChange} id="reqNo" className="form-input" type="text" name="reqNo" placeholder="Enter Wachman ID" required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="first-name">First Name<span className="form-required"> </span></label>
                                <input onChange={handleChange} id="first-name" className="form-input" type="text" name="occupant_firstname" placeholder="Enter First Name"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="last-name">Last Name<span className="form-required"> </span></label>
                                <input onChange={handleChange} id="last-name" className="form-input" type="text" name="occupant_lastname" placeholder="Enter Last Name"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="email">Email ID<span className="form-required"> </span></label>
                                <input onChange={handleChange} id="email" className="form-input" type="email" name="email" placeholder="Enter Email ID"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="d-o-v">Date of Violation<span className="form-required"> </span></label>
                                <input onChange={handleChange} id="d-o-v" className="form-input" type="date" name="date_of_v" placeholder="Enter Date of Violation (MM/DD/YY)"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="des">Violation Description<span className="form-required"> </span></label>
                                <input onChange={handleChange} id="des" className="form-input" type="text" name="des" placeholder="Violation Description"
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

// export default addViolation;
