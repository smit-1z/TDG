// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './contact.css';
import { Header } from '../Header/header';

export function Contact() {
  return (
    <div>
        {/* <!-- Start of the header --> */}
            <Header/>
        <div className="containers">
            <h1>
                Connect with us
            </h1>
            <p>
                If you have any doubts you can contact us
            </p>
            <div className="contact-box">
                <div className="contact-left">
                    <h3>
                        Send Your Request
                    </h3>
                    {/* <!-- Code for the left inpput form --> */}
                    <form>
                        <div className="contact-input-row">
                            <div className="form-input-group">
                                <label >Name</label>
                                <input type="text" placeholder="Avish Modi"/>
                            </div>
                            <div className="contact-input-group">
                                <label>Phone</label>
                                <input type="text" placeholder=" +1 123 456 7890"/>
                            </div>
                            </div>
                            <div className="contact-input-row">
                            <div className="contact-input-group">
                                <label>Email</label>
                                <input type="email" placeholder="example@xyz.com"/>
                            </div>
                            <div className="contact-input-group">
                                <label>Subject</label>
                                <input type="text" placeholder="Subject"/>
                            </div>
                        </div>
                        <label>Message</label>
                        <textarea rows="10" placeholder="Tell us about your concern"></textarea>
                        <button type="submit">Send</button>
                    </form>                    
                </div>
                {/* <!-- End of the left input form --> */}
                <div className="contact-right">
                    {/* <!-- Code for the contact details (Right side of the container) --> */}
                        <h3>Tell Us</h3>

                        <table>
                            <tr>
                                <td>Email</td>
                                <td>demo@contactus.com</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
                                <td>+1 234 567 8910</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>
                                    123, summit ave<br/>
                                    Arlington, TX 76013
                                </td>
                            </tr>
                        </table>
                </div>
                {/* <!-- End of the right side container --> */}
                  
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
        {/* <!-- End of the footer -->         */}
    </div>
  );
}

// export default Contact;
