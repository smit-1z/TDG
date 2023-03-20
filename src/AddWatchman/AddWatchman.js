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

export function AddWatchman() {
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
                    <form name="form" action="" method="post">
                        <div className="two-columns">
                            <fieldset>
                                <label className="form-label" for="reqNo">Wachman ID<span className="form-required"> *</span></label>
                                <input id="reqNo" className="form-input" type="text" name="reqNo" placeholder="Enter Wachman ID"
                                    required/>
                            </fieldset>

                            <fieldset>
                            <label className="form-label" htmlFor="first-name">First name<span className="form-required"> *</span></label>
                            <input id="first-name" className="form-input" type="text" name="watchman-first-name" placeholder="First name" required/>
                            </fieldset>

                            <fieldset>
                            <label className="form-label" htmlFor="last-name">Last name<span className="form-required"> *</span></label>
                            <input id="last-name" className="form-input" type="text" name="Watchman-last-name" placeholder="Last name" required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="duty">Duty Type<span className="form-required"> </span></label>
                                <input id="duty" className="form-input" type="text" name="duty" placeholder="Enter Duty Type"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="ssn">SSN<span className="form-required"> *</span></label>
                                <input id="ssn" className="form-input" type="text" name="ssn" placeholder="Enter SSN"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="salary">Salary<span className="form-required"> *</span></label>
                                <input id="salary" className="form-input" type="text" name="salary" placeholder="Enter Salary"
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
