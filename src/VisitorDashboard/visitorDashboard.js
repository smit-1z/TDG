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


export function VisitorDashboard() {
  return (
    <div>
        <link rel="stylesheet" type="text/css" href="https://demo.plantpot.works/assets/css/normalize.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Header/>
        <main>
            <h1>Visitors Profile Dashboard </h1>
            <h1>Welcome Ned</h1>
            <div className="resident-details">
                <div className="personal-details">
                    <div className="info">
                        <div className="group-detail">
                            <label>First Name</label>
                            <div className="detail-values">Ned</div>
                        </div>
                        <div className="group-detail">
                            <label>Last Name</label>
                            <div className="detail-values">Stark</div>
                        </div>
                        <div className="group-detail">
                            <label>Username</label>
                            <div className="detail-values">ned.stark@yahoo.com</div>
                        </div>
                        <div className="group-detail">
                            <label>Gender</label>
                            <div className="detail-values">Male</div>
                        </div>
                        <div className="group-detail">
                            <label>DOB</label>
                            <div className="detail-values">12/26/1996</div>
                        </div>
                        <div className="group-detail">
                            <label>Mobile</label>
                            <div className="detail-values">123-456-7890</div>
                        </div>
                        <div className="group-detail">
                            <label>Address</label>
                            <div className="detail-values">415 Royal Ln</div>
                        </div>
                        <div className="group-detail">
                            <label>Govt ID / DL</label>
                            <div className="detail-values">*** *** *** 5678</div>
                        </div>
                    </div>
                    <div className="change-password">
                        <div className="pwd-btn">
                            {/*<input type="button" className="change-pwd-btn" onclick="" value="Change Password" />*/}
                            <div className='a'><Link to='/Forgot' style={{ textDecoration: 'none', color: 'white' }}>Change Password</Link></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!--- START WITH ALL TABLES FROM HERE-----> */}

            <div className="center-align">
                <div className="occupant-list">
                    <h6>Register Details</h6>
                    <div className='table'>
                        <div className='tr, th'>

                            <div className='td'>#</div>
                            <div className='td'>First Name</div>
                            <div className='td'>Last Name</div>
                            <div className='td'>DOB</div>
                            <div className='td'>Gender</div>
                            <div className='td'>Email ID</div>
                            <div className='td'>Mobile No</div>
                            <div className='td'>DL</div>
                            <div className='td'>Car License Plate </div>
                            <div className='td'></div>
                            <div className='td'></div>

                        </div>
                        <div className='tr'>

                            <div className='td'>1</div>
                            <div className='td'>Ana</div>
                            <div className='td'>Smith</div>
                            <div className='td'>09/23/2002</div>
                            <div className='td'>Female</div>
                            <div className='td'>ana@gmail.com</div>
                            <div className='td'>123-678-1221</div>
                            <div className='td'>17600550</div>
                            <div className='td'>RVN 8404</div>
                            <div className='td'><a href=''>UPDATE</a></div>
                            <div className='td'><a href=''>DELETE</a></div>

                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/AddHost' style={{ textDecoration: 'none', color: 'white' }}>Add Host</Link></div>   
                        </div>
                    </div>

                    {/* ---------------------Map over here----------------------------------- */}

                    
                </div>

                <h6>Timings</h6>
                <div className='table'>
                    <div className='tr, th'>
                        <div className='td'>Date</div>
                        <div className='td'>In Time:</div>
                        <div className='td'>Out Time:</div>
                    </div>
                    <div className='tr'>
                        <div className='td'>2/5/2022</div>
                        <div className='td'>9:00 AM</div>
                        <div className='td'>6:00 PM</div>
                    </div>
                    <div className='tr'>
                        <div className='td'>5/15/2022</div>
                        <div className='td'>9:00 PM</div>
                        <div className='td'>6:00 AM</div>
                    </div>
                    <div className='tr'>
                        <div className='td'>8/4/2022</div>
                        <div className='td'>10:00 PM</div>
                        <div className='td'>2:00 AM</div>
                    </div>
                    <div className='tr'>
                        <div className='td'>9/11/2022</div>
                        <div className='td'>10:00 AM</div>
                        <div className='td'>11:00 AM</div>
                    </div>
                </div>

                <h6>Driving Directions</h6>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1678.1310008554017!2d-97.12172874191167!3d32.73223299524639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e7d0e6ef229bf%3A0x70a5eb6cc76c21e1!2sMeadow%20Run%2C%20501%20Summit%20Ave%2C%20Arlington%2C%20TX%2076013!5e0!3m2!1sen!2sus!4v1676672885147!5m2!1sen!2sus" width="1400" height="800"  allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
        <Chat/>
    </div>
  );
}

// export default visitorDashboard;
