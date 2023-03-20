// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './residentdashboard.css';
import { Header } from '../Header/header';
import { Link } from 'react-router-dom';
import Chat from '../Chat/Chat';


export function SecurityManager() {
  return (
    <div>
        <link rel="stylesheet" type="text/css" href="https://demo.plantpot.works/assets/css/normalize.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <Header/>


        <main>
            <h1>Security Manger Dashboard</h1>
            <h1>Welcome Arya</h1>
            <div className="resident-details">
                <div className="personal-details">
                    <div className="info">
                        <div className="group-detail">
                            <label>First Name</label>
                            <div className="detail-values">Arya</div>
                        </div>
                        <div className="group-detail">
                            <label>Last Name</label>
                            <div className="detail-values">Stark</div>
                        </div>
                        <div className="group-detail">
                            <label>Username</label>
                            <div className="detail-values">arya.stark@gmail.com</div>
                        </div>
                        <div className="group-detail">
                            <label>Gender</label>
                            <div className="detail-values">female</div>
                        </div>
                        <div className="group-detail">
                            <label>DOB</label>
                            <div className="detail-values">10/20/1998</div>
                        </div>
                        <div className="group-detail">
                            <label>Mobile</label>
                            <div className="detail-values">123-456-7890</div>
                        </div>
                        <div className="group-detail">
                            <label>Address</label>
                            <div className="detail-values">419 Summit Ave</div>
                        </div>
                        <div className="group-detail">
                            <label>Govt ID</label>
                            <div className="detail-values">*** *** *** 5678</div>
                        </div>
                        <div className="group-detail">
                            <label>Tennis Court No</label>
                            <div className="detail-values">01</div>
                        </div>
                    </div>
                    <div className="change-password">
                        <div className="pwd-btn">
                        <div className='a'><Link to='/Forgot' style={{ textDecoration: 'none', color: 'white' }}>Change Password</Link></div>
                        </div>
                    </div>
                    <div className="change-password">
                        <div className="pwd-btn">
                        <div className='a'><Link to='/Report' style={{ textDecoration: 'none', color: 'white' }}>Generate Report</Link></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--- START WITH ALL TABLES FROM HERE-----> */}

            <div className="center-align">
                <div className="occupant-list">

                    {/* <!----------Shifts-----------------------------> */}

                    <h6>Watchman Shift Timings</h6>

                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>Watchman ID</div>
                            <div className='td'>Mon</div>
                            <div className='td'>Tue</div>
                            <div className='td'>Wed</div>
                            <div className='td'>Thur</div>
                            <div className='td'>Fri</div>
                            <div className='td'>Sat</div>
                            <div className='td'>Sun</div>
                            <div className='td'></div>
                            <div className='td'></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>10019</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>10018</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                            
                        </div>
                        <div className='tr'>
                            <div className='td'>10017</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                            
                        </div>
                        <div className='tr'>
                            <div className='td'>10016</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'>9:00 AM - 5:00 PM</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>10015</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>10014</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>10013</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'>9:00 PM - 4:00 AM</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>

                        </div>
                    </div>
                    {/* <!------Manage Watchmen-------------------------> */}

                    <h6>Manage Watchmen</h6>

                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>Watchman ID</div>
                            <div className='td'>First Name</div>
                            <div className='td'>Last Name</div>
                            <div className='td'>Duty Type</div>
                            <div className='td'>Salary</div>
                            <div className='td'>SSN</div>
                            <div className='td'></div>
                            <div className='td'></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>10019</div>
                            <div className='td'>Harry</div>
                            <div className='td'>Potter</div>
                            <div className='td'>Guard</div>
                            <div className='td'>$45,000</div>
                            <div className='td'>763-124-1131</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                        </div>

                        <div className='tr'>
                            <div className='td'>10018</div>
                            <div className='td'>Peter</div>
                            <div className='td'>Pan</div>
                            <div className='td'>Tennis Court</div>
                            <div className='td'>$46,000</div>
                            <div className='td'>713-144-1136</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                        </div>

                        <div className='tr'>
                            <div className='td'>10017</div>
                            <div className='td'>John</div>
                            <div className='td'>Doe</div>
                            <div className='td'>Pool Guard</div>
                            <div className='td'>$55,000</div>
                            <div className='td'>761-114-5135</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                        </div>

                        <div className='tr'>
                            <div className='td'>10016</div>
                            <div className='td'>Mary</div>
                            <div className='td'>Gates</div>
                            <div className='td'>Garden Guard</div>
                            <div className='td'>$65,000</div>
                            <div className='td'>163-224-1134</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                        </div>

                        <div className='tr'>
                            <div className='td'>10019</div>
                            <div className='td'>Harry</div>
                            <div className='td'>Potter</div>
                            <div className='td'>Guard</div>
                            <div className='td'>$45,000</div>
                            <div className='td'>763-124-1131</div>
                            <div className='td'><a href="">UPDATE</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                        </div>
                    </div>
                    
                    <div className="button-row">
                        <div className="btn-after-table">
                            {/* <a href="addViolation.html" type="button" className="occupant-btn">Add Violation</a> */}
                            <div className='a'><Link to='/AddWatchman' style={{ textDecoration: 'none', color: 'white' }}>Add Watchman</Link></div>
                        </div>
                    </div>
                    {/* <!------Resident Violation History-------------------------> */}

                    <h6>Resident Violation History</h6>

                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>Resident ID</div>
                            <div className='td'>First name</div>
                            <div className='td'>Last Name</div>
                            <div className='td'>Email ID</div>
                            <div className='td'>Date of Violation</div>
                            <div className='td'>Violation Level</div>
                            <div className='td'>Violation Description</div>
                            <div className='td'></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>101</div>
                            <div className='td'>Keta</div>
                            <div className='td'>Modi</div>
                            <div className='td'>ketaModi420@gmail.com</div>
                            <div className='td'>03/14/2023</div>
                            <div className='td'>Level 4</div>
                            <div className='td'>Smoke Alarm</div>
                            <div className='td'><a href="">DELETE</a></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>102</div>
                            <div className='td'>Helly</div>
                            <div className='td'>Shulka</div>
                            <div className='td'>HellyShukla@gmail.com</div>
                            <div className='td'>03/14/2023</div>
                            <div className='td'>Level 2</div>
                            <div className='td'>Over Occupancy</div>
                            <div className='td'><a href="">DELETE</a></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>101</div>
                            <div className='td'>Keta</div>
                            <div className='td'>Modi</div>
                            <div className='td'>ketaModi420@gmail.com</div>
                            <div className='td'>03/14/2023</div>
                            <div className='td'>Level 4</div>
                            <div className='td'>Smoke Alarm</div>
                            <div className='td'><a href="">DELETE</a></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>102</div>
                            <div className='td'>Helly</div>
                            <div className='td'>Shulka</div>
                            <div className='td'>HellyShukla@gmail.com</div>
                            <div className='td'>03/14/2023</div>
                            <div className='td'>Level 2</div>
                            <div className='td'>Over Occupancy</div>
                            <div className='td'><a href="">DELETE</a></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>101</div>
                            <div className='td'>Keta</div>
                            <div className='td'>Modi</div>
                            <div className='td'>ketaModi420@gmail.com</div>
                            <div className='td'>03/14/2023</div>
                            <div className='td'>Level 4</div>
                            <div className='td'>Smoke Alarm</div>
                            <div className='td'><a href="">DELETE</a></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>102</div>
                            <div className='td'>Helly</div>
                            <div className='td'>Shulka</div>
                            <div className='td'>HellyShukla@gmail.com</div>
                            <div className='td'>03/14/2023</div>
                            <div className='td'>Level 2</div>
                            <div className='td'>Over Occupancy</div>
                            <div className='td'><a href="">DELETE</a></div>
                        </div>
                    </div>
                        
                    <div className="button-row">
                        <div className="btn-after-table">
                            {/* <a href="addViolation.html" type="button" className="occupant-btn">Add Violation</a> */}
                            <div className='a'><Link to='/AddViolation' style={{ textDecoration: 'none', color: 'white' }}>Add Violation</Link></div>
                        </div>
                    </div>
                    {/* <!-------Visitor Details-----------------> */}

                    <h6>Visitor Log</h6>

                    
                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>Date</div>
                            <div className='td'>DL</div>
                            <div className='td'>In Time:</div>
                            <div className='td'>Out Time:</div>

                        </div>
                        <div className='tr'>
                            <div className='td'>2/5/2022</div>
                            <div className='td'>17600510</div>
                            <div className='td'>9:00 AM</div>
                            <div className='td'>6:00 PM</div>

                            
                        </div>
                        <div className='tr'>
                            <div className='td'>5/15/2022</div>
                            <div className='td'>17720517</div>
                            <div className='td'>9:00 PM</div>
                            <div className='td'>6:00 AM</div>

                        </div>
                        <div className='tr'>
                            <div className='td'>8/4/2022</div>
                            <div className='td'>17600874</div>
                            <div className='td'>10:00 PM</div>
                            <div className='td'>2:00 AM</div>

                        </div>
                        <div className='tr'>
                            <div className='td'>9/11/2022</div>
                            <div className='td'>10:00 AM</div>
                            <div className='td'>11:00 AM</div>
                            <div className='td'>5:00 PM</div>

                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            {/* <a href="addViolation.html" type="button" className="occupant-btn">Add Violation</a> */}
                            <div className='a'><Link to='/AddVisitor' style={{ textDecoration: 'none', color: 'white' }}>Add Visitor</Link></div>
                        </div>
                    </div>
                </div>
            </div>

            <Chat/>

        </main>
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

    {/* <!-- https://www.w3schools.com/howto/howto_js_popup_chat.asp --> */}

    </div>
  );
}

// export default securityManager;
