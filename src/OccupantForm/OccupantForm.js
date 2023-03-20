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


export function OccupantForm() {
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
          <form name="form" action="" method="post">
            <div className="two-columns">
              <fieldset>
                <label className="form-label" htmlFor="first-name">First name<span className="form-required"> *</span></label>
                <input id="first-name" className="form-input" type="text" name="occupant-first-name" placeholder="Occupant's first name" required/>
              </fieldset>

              <fieldset>
                <label className="form-label" htmlFor="last-name">Last name<span className="form-required"> *</span></label>
                <input id="last-name" className="form-input" type="text" name="occupant-last-name" placeholder="Occupant's last name" required/>
              </fieldset>
            </div>

            <fieldset>
              <label class="form-label" for="dob">DOB<span class="form-required"> *</span></label>
              <input id="dob" class="form-input" type="date" name="occupant-dob" placeholder="05/31/2001" required/>
            </fieldset>

            <fieldset>
              <label class="form-label" for="gender">Gender<span class="form-required"> *</span></label>
              <input id="gender" class="form-input" type="text" name="occupant-gender" placeholder="Occupant's Gender" required/>
            </fieldset>
          
            <fieldset>
              <label class="form-label" for="email">Email address<span></span></label>
              <input id="email" class="form-input" type="email" name="occupant-email" placeholder="Email@gmail.com" required/>
            </fieldset>

            <fieldset>
              <label class="form-label" for="mobile">Mobile No<span></span></label>
              <input id="email" class="form-input" type="text" name="occupant-mobile" placeholder="Enter mobile no" required/>
            </fieldset>

            <fieldset>
              <label class="form-label" for="relation">Relation<span class="form-required"> *</span></label>
              <input id="relation" class="form-input" type="text" name="your-relation" placeholder="Enter relation with occupant" required/>
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
