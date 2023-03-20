// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './log-for.css';
import { Header } from '../Header/header';

export function Forgot() {
  return (
    <body>
        {/* <!-- Start of the header --> */}
        <Header/>
        {/* <!-- End of the header --> */}
        <div className="logfor-containers">
            <h1>
                Forgot your password?
            </h1>
            <p>
                Dont worry We have got you !!!
            </p>

            {/* <!-- The main container --> */}
            <div className="logfor-box">

                {/* <!-- We have divided container in two parts left and right --> */}
                {/* <!-- The left part --> */}
                <div className="logfor-left">
                    {/* <!-- code for forgot password form                   --> */}
                    <form action="" className="form">
                        <h2>
                            Forgot Password
                        </h2>
                            <div className="logfor-input-group">
                                <label ><b>Email</b></label>
                                <input type="email" placeholder="xyz@emaple.com" className="box"/>
                            </div>
                          {/* <!-- Submit button   --> */}
                        <button type="submit">Send</button>
                    </form>
                    {/* <!-- End of the forgot-password form --> */}
                    <h3>A reset link will be sent to your email account</h3>
                </div>

                {/* <!-- Image beside the forgot-password form --> */}
                <div className="logfor-right">
                       {/* <img src="TDG-logos.jpeg" width="500" height="500"/> */}
                </div>         
            </div>
        </div>

        {/* <!-- code for the footer icons and FAQs --> */}
        <section className="footer">
            <h3> FAQs </h3>
            {/* <!-- <p> </p> --> */}
        
            <div className ="icons">
                <i className = "fa fa-facebook-f"></i>
                <i className = " fa fa-instagram"></i>
                <i className = "fa fa-address-card"></i>
                <i className = "fa fa-at"></i>
            </div> 
        </section>
        {/* <!-- End of the footer --> */}

    </body>
  );
}

// export default forgot;
