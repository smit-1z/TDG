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


export function PoolManager() {
  return (
    <div>
        <link rel="stylesheet" type="text/css" href="https://demo.plantpot.works/assets/css/normalize.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Header/>
        <main>
            <h1>Pool Manager Dashboard</h1>
            <h1>Welcome Rob</h1>
            <div className="resident-details">
                <div className ="personal-details">
                    <div className="info">
                        <div className="group-detail">
                            <label>First Name</label>
                            <div className = "detail-values">Rob</div>
                        </div>
                        <div className="group-detail">
                            <label>Last Name</label>
                            <div className = "detail-values">Stark</div>
                        </div>
                        <div className="group-detail">
                            <label>Username</label>
                            <div className = "detail-values">rob.stark@gmail.com</div>
                        </div>
                        <div className="group-detail">
                            <label>Gender</label>
                            <div className = "detail-values">Male</div>
                        </div>
                        <div className="group-detail">
                            <label>DOB</label>
                            <div className = "detail-values">12/26/1996</div>
                        </div>
                        <div className="group-detail">
                            <label>Mobile</label>
                            <div className = "detail-values">123-456-7890</div>
                        </div>
                        <div className="group-detail">
                            <label>Address</label>
                            <div className = "detail-values">407 Summit Ln</div>
                        </div>
                        <div className="group-detail">
                            <label>Govt ID</label>
                            <div className = "detail-values">*** *** *** 5678</div>
                        </div>
                        <div className="group-detail">
                            <label>Pool No</label>
                            <div className = "detail-values">01</div>
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
                <div className ="occupant-list">

                    {/* <!----------Shifts-----------------------------> */}

                    <h6>My Shift</h6>
                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'></div>
                            <div className='td'>Mon</div>
                            <div className='td'>Tue</div>
                            <div className='td'>Wed</div>
                            <div className='td'>Thur</div>
                            <div className='td'>Fri</div>
                            <div className='td'>Sat</div>
                            <div className='td'>Sun</div>
                        </div>
                        <div className='tr'>
                            <div className='td'>In Time:</div>
                            <div className='td'>8:00 AM</div>
                            <div className='td'>8:00 AM</div>
                            <div className='td'>8:00 AM</div>
                            <div className='td'>8:00 AM</div>
                            <div className='td'>8:00 AM</div>
                            <div className='td'>8:00 AM</div>
                            <div className='td'>--</div>
                        </div>
                        <div className='tr'>
                            <div className='td'>Out Time:</div>
                            <div className='td'>6:00 PM</div>
                            <div className='td'>6:00 PM</div>
                            <div className='td'>6:00 PM</div>
                            <div className='td'>6:00 PM</div>
                            <div className='td'>6:00 PM</div>
                            <div className='td'>6:00 PM</div>
                            <div className='td'>--</div>
                        </div>
                    </div>

                    {/* <!------Pool Time------------------------------> */}

                    <h6>Manage Pool Timings</h6>

                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'></div>
                            <div className='td'>Monday</div>
                            <div className='td'>Tuesday</div>
                            <div className='td'>Wednesday</div>
                            <div className='td'>Thursday</div>
                            <div className='td'>Friday</div>
                            <div className='td'>Saturday</div>
                            <div className='td'>Sunday</div>
                        </div>
                        <div className='tr'>
                            <div className='td'>Opens At:</div>
                            <div className='td'>10:00 AM</div>
                            <div className='td'>10:00 AM</div>
                            <div className='td'>10:00 AM</div>
                            <div className='td'>10:00 AM</div>
                            <div className='td'>10:00 AM</div>
                            <div className='td'>10:00 AM</div> 
                            <div className='td'>10:00 AM</div> 
                        </div>
                        <div className='tr'>
                            <div className='td'>Closes At:</div>
                            <div className='td'>10:00 PM</div>
                            <div className='td'>10:00 PM</div>
                            <div className='td'>10:00 PM</div>
                            <div className='td'>10:00 PM</div>
                            <div className='td'>10:00 PM</div>
                            <div className='td'>02:00 AM</div> 
                            <div className='td'>02:00 AM</div> 
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/EditPoolTiming' style={{ textDecoration: 'none', color: 'white' }}>Edit Pool Timimg</Link></div>
                        </div>
                    </div>

                    {/* <!------MANAGE BOOKINGS OF RESIDENTS-------------------------> */}

                    <h6>Manage Pool Reservations</h6>

                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>#</div>
                            <div className='td'>Req#</div>
                            <div className='td'>Email ID</div>
                            <div className='td'>Date</div>
                            <div className='td'>Start Time</div>
                            <div className='td'>End Time</div>
                            <div className='td'>No of Guests</div>
                            <div className='td'>Decision</div>
                            <div className='td'>Comments</div>
                            <div className='td'></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>1</div>
                            <div className='td'>R101</div>
                            <div className='td'>res1@gmail.com</div>
                            <div className='td'>03/14/2023</div>
                            <div className='td'>12:00 PM</div>
                            <div className='td'>08:00 PM</div>
                            <div className='td'>35</div>
                            <div className='td'>--</div>
                            <div className='td'>--</div>
                            <div className='td'><a href="">DELETE</a></div>
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/EvaluateBookingForm' style={{ textDecoration: 'none', color: 'white' }}>Evaluate Booking</Link></div>
                        </div>
                    </div>


                    {/* <!---------POOL VISITORS--------------------------------> */}

                    <h6>Pool Visitors</h6>
                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>#</div>
                            <div className='td'>Name</div>
                            <div className='td'>Visitor Email ID</div>
                            <div className='td'>Resident Email ID</div>
                            <div className='td'>Apt No</div>
                            <div className='td'>Date</div>
                            <div className='td'>In Time</div>
                            <div className='td'>Out Time</div>
                            <div className='td'></div>
                            <div className='td'></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>1</div>
                            <div className='td'>Sansa</div>
                            <div className='td'>vis1@gmail.com</div>
                            <div className='td'>res2@gmail.com</div>
                            <div className='td'>123</div>
                            <div className='td'>02/10/2023</div>
                            <div className='td'>5:00 PM</div>
                            <div className='td'>8:00 PM</div>
                            <div className='td'><a href="">EDIT</a></div>
                            <div className='td'><a href="">DELETE</a></div>
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/PoolVisitForm' style={{ textDecoration: 'none', color: 'white' }}>Register Visit</Link></div>
                        </div>
                    </div>

                    {/* <!-------REQUEST MAINTENANCE-----------------> */}

                    <h6>Maintenance Schedule</h6>
                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>#</div>
                            <div className='td'>Maintenance Type</div>
                            <div className='td'>Description</div>
                            <div className='td'>Date</div>
                            <div className='td'>Time</div>
                            <div className='td'></div>
                            <div className='td'></div>
                        </div>  
                            
                        <div className='tr'>
                            <div className='td'>1</div>
                            <div className='td'>Cleaning</div>
                            <div className='td'>Automatic Pool Vaccuming</div>
                            <div className='td'>02/25/2023</div>
                            <div className='td'>10:00 AM</div>
                            <div className='td'><a href="">CANCEL</a></div>
                            <div className='td'><a href="">DELETE</a></div>
                        </div>

                        <div className='tr'>
                            <div className='td'>2</div>
                            <div className='td'>Cleaning</div>
                            <div className='td'>Automatic Pool Vaccuming</div>
                            <div className='td'>02/28/2023</div>
                            <div className='td'>10:00 AM</div>
                            <div className='td'><a href="">CANCEL</a></div>
                            <div className='td'><a href="">DELETE</a></div>
                        </div>                            
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/PoolMaintenance' style={{ textDecoration: 'none', color: 'white' }}>Schedule Maintenance</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
        <Chat/>
       

        <section className="footer">
            <h3> FAQs </h3>
            {/* <!-- <p> </p> -> */}
        
            <div className ="icons">
                <i className = "fa fa-facebook-f"></i>
                <i className = "fa fa-instagram"></i>
                <i className = "fa fa-address-card"></i>
                <i className = "fa fa-at"></i>
            </div>
        </section>

    </div>
  );
}

// export default poolManager;
