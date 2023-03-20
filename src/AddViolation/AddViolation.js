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


export function AddViolation() {
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
                    <form name="form" action="" method="post">
                        <div className="two-columns">
                            <fieldset>
                                <label className="form-label" for="reqNo">Resident ID<span className="form-required"> *</span></label>
                                <input id="reqNo" className="form-input" type="text" name="reqNo" placeholder="Enter Wachman ID" required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="first-name">First Name<span className="form-required"> </span></label>
                                <input id="first-name" className="form-input" type="text" name="occupant-first-name" placeholder="Enter First Name"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="last-name">Last Name<span className="form-required"> </span></label>
                                <input id="last-name" className="form-input" type="text" name="occupant-last-name" placeholder="Enter Last Name"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="email">Email ID<span className="form-required"> </span></label>
                                <input id="email" className="form-input" type="email" name="email" placeholder="Enter Email ID"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="d-o-v">Date of Violation<span className="form-required"> </span></label>
                                <input id="d-o-v" className="form-input" type="date" name="date-of-v" placeholder="Enter Date of Violation (MM/DD/YY)"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="des">Violation Description<span className="form-required"> </span></label>
                                <input id="des" className="form-input" type="text" name="des" placeholder="Violation Description"
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
