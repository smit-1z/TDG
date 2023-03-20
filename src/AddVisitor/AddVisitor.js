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


export function AddVisitor() {
  return (
    <div>
        <link rel="stylesheet" href="https://demo.plantpot.works/assets/css/normalize.css"></link>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Header/>
        <div className="h1-heading">
            <h1>Add Visitor Log</h1>
        </div>
        <div id="container">
            <div className="form-box">
                <div className='form'>
                    <form name="form" action="" method="post">
                        <div className="two-columns">
                            <fieldset>
                                <label className="form-label" for="date">Date<span className="form-required"> </span></label>
                                <input id="date" className="form-input" type="date" name="date" placeholder="Enter Date (MM/DD/YY)"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="dl">DL<span className="form-required"> </span></label>
                                <input id="dl" className="form-input" type="text" name="dl" placeholder="DL"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="in-time">In Time :<span className="form-required"> </span></label>
                                <input id="in-time" className="form-input" type="time" name="in-time" placeholder="Enter Last Name"
                                    required/>
                            </fieldset>

                            <fieldset>
                                <label className="form-label" for="out-time">Out Time:<span className="form-required"> </span></label>
                                <input id="out-time" className="form-input" type="time" name="out-time" placeholder="Enter Duty Type"
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

// export default addVisitor;
