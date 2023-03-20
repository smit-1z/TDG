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

import {VehicleRegistrationForm} from '../VehicleRegistrationForm/VehicleRegistrationForm';




export function ResidentDashboard() {
    
    
  return (
    <div>
        <link rel="stylesheet" type="text/css" href="https://demo.plantpot.works/assets/css/normalize.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        
        <Header/>

        <main>
          <h1>Resident Dashboard</h1>
          <h1>Welcome Jon</h1>
          <div className="resident-details">
              <div className ="personal-details">
                  <div className="info">
                      <div className="group-detail">
                          <label>First Name</label>
                          <div className = "detail-values">Jon</div>
                      </div>
                      <div className="group-detail">
                          <label>Last Name</label>
                          <div className = "detail-values">Smith</div>
                      </div>
                      <div className="group-detail">
                          <label>Username</label>
                          <div className = "detail-values">jon.smith@gmail.com</div>
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
                          <div className = "detail-values">415 Summit Ln</div>
                      </div>
                      <div className="group-detail">
                          <label>Govt ID</label>
                          <div className = "detail-values">*** *** *** 5678</div>
                      </div>
                  </div>
                  <div className="change-password">
                      <div className="pwd-btn">
                          {/* <input type="button" className="change-pwd-btn" onclick="window.location='forgot.html'" value="Change Password"/> */}
                          <div className='a'><Link to='/Forgot' style={{ textDecoration: 'none', color: 'white' }}>Change Password</Link></div>
                
                      </div>
                  </div>
              </div>
          </div>
  
          {/* <!--- START WITH ALL TABLES FROM HERE-----> */}
  
  
          <div className="center-align">
              <div className ="occupant-list">
  
  
                <h6>Events At TDG!</h6>
  
                  <div className='table'>
                      
                      <div className='tr, th'>
                    
                              <div className='td'>#</div>
                              <div className='td'>Event Name</div>
                              <div className='td'>Location</div>
                              <div className='td'>Date</div>
                              <div className='td'>Start Time</div>
                              <div className='td'>End Time</div>
                              <div className='td'>Description</div>
                          
                      </div>
                      <div className='tr'>
                          
                        <div className='td'>1</div>
                        <div className='td'>Movie Night!</div>
                        <div className='td'>Club House</div>
                        <div className='td'>02/26/2023</div>
                        <div className='td'>12:00 PM</div>
                        <div className='td'>04:00 PM</div>
                        <div className='td'>Black Panther</div>
                          
                      </div>
                      <div className='tr'>
                      
                        <div className='td'>2</div>
                        <div className='td'>Paint!</div>
                        <div className='td'>Club House</div>
                        <div className='td'>03/20/2023</div>
                        <div className='td'>12:00 PM</div>
                        <div className='td'>02:00 PM</div>
                        <div className='td'>Paint murals!</div>
                          
                      </div>
                  </div>
  
          {/* <!--------------Occupant List-------------> */}
  
  
  
                  <h6>Occupant List</h6>
                  
                  <div className='table'>
                      
                      <div className='tr, th'>
                            <div className='td'>#</div>
                            <div className='td'>First Name</div>
                            <div className='td'>Last Name</div>
                            <div className='td'>DOB</div>
                            <div className='td'>Gender</div>
                            <div className='td'>Email ID</div>
                            <div className='td'>Mobile No</div>
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
                            <div className='td'><a href="">EDIT</a></div>
                            <div className='td'><a href="">DELETE</a></div>
                          
                      </div>
                  </div>
                  <div className="button-row">
                      <div className="btn-after-table">
                        <div className='a'><Link to='/OccupantForm' style={{ textDecoration: 'none', color: 'white' }}>Add Occupant</Link></div>
                      </div>
                  </div>
  
          {/* <!--------Register Vehicle Details----------> */}
  
                  <h6>Vehicle Details</h6>
                  
                  <div className='table'>
                      
                      <div className='tr, th'>
                            <div className='td'>#</div>
                            <div className='td'>Email ID</div>
                            <div className='td'>Vehicle Type</div>
                            <div className='td'>License Plate</div>
                            <div className='td'></div>
                            <div className='td'></div>
                      </div>
                      <div className='tr'>
                         
                            <div className='td'>1</div>
                            <div className='td'>jon.smith@gmail.com</div>
                            <div className='td'>Car</div>
                            <div className='td'>ABC 123</div>
                            <div className='td'><a href="">EDIT</a></div>
                            <div className='td'><a href="">DELETE</a></div>
                          
                      </div>
                  </div>
                  <div className="button-row">
                      <div className="btn-after-table">
                            <div className='a'><Link to='/VehicleRegistrationForm' style={{ textDecoration: 'none', color: 'white' }}>Add Vehicle</Link></div>
                      </div>
                  </div>
  
  
          {/* <!------MEMBERSHIP-------------------------> */}
  
                  <h6>Manage Membership</h6>
  
                  <div className='table'>
                      
                      <div className='tr, th'>
                          
                            <div className='td'>#</div>
                            <div className='td'>Facility</div>
                            <div className='td'>No of Members</div>
                            <div className='td'>Duration</div>
                            <div className='td'>Renews On</div>
                            <div className='td'>Cost</div>
                            <div className='td'></div>
                            <div className='td'></div>
                        
                      </div>
                      <div className='tr'>
                            <div className='td'>1</div>
                            <div className='td'>Gym</div>
                            <div className='td'>2</div>
                            <div className='td'>6 Months</div>
                            <div className='td'>06/01/2023</div>
                            <div className='td'>$500</div>
                            <div className='td'><a href="">EDIT</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                      </div>
                  </div>
                  <div className="button-row">
                      <div className="btn-after-table">
                        <div className='a'><Link to='/MembershipForm' style={{ textDecoration: 'none', color: 'white' }}>Request Membership</Link></div>
                          
                      </div>
                  </div>
  
          {/* <!-------BOOKINGS-----------------------------> */}
  
  
                  <h6>Manage Bookings</h6>
  
                  <div className='table'>
                      
                      <div className='tr, th'>
                          
                            <div className='td'>#</div>
                            <div className='td'>Facility</div>
                            <div className='td'>Date</div>
                            <div className='td'>Start Time</div>
                            <div className='td'>End Time</div>
                            <div className='td'>Total No of Guests</div>
                            <div className='td'>Decision</div>
                            <div className='td'>Comments</div>
                            <div className='td'></div>
                            <div className='td'></div>
                      </div>

                      <div className='tr'>
                          
                            <div className='td'>1</div>
                            <div className='td'>Pool</div>
                            <div className='td'>02/26/2023</div>
                            <div className='td'>12:00 PM</div>
                            <div className='td'>08:00 PM</div>
                            <div className='td'>35</div>
                            <div className='td'>Accepted</div>
                            <div className='td'>No more than 35 guests allowed!</div>
                            <div className='td'><a href="">EDIT</a></div>
                            <div className='td'><a href="">CANCEL</a></div>
                      </div>

                      <div className='tr'>
                              <div className='td'>2</div>
                              <div className='td'>Garden</div>
                              <div className='td'>03/20/2023</div>
                              <div className='td'>05:00 PM</div>
                              <div className='td'>09:00 PM</div>
                              <div className='td'>15</div>
                              <div className='td'>--</div>
                              <div className='td'>--</div>
                              <div className='td'><a href="">EDIT</a></div>
                              <div className='td'><a href="">CANCEL</a></div>
                      </div>
                  </div>
                  <div className="button-rowr">
                      <div className="btn-after-tabler">

                          <div className='a'><Link to='/BookingForm' style={{ textDecoration: 'none', color: 'white' }}>New Booking</Link></div>
                      </div>
                  </div>
  
          {/* <!-------REQUEST MAINTENANCE-----------------> */}
  
  
                  <h6>Maintenance Requests</h6>
  
                    <div className='table'>
                      
                        <div className='tr, th'>
                        
                              
                                <div className='td'>#</div>
                                <div className='td'>Maintenance Type</div>
                                <div className='td'>Emergency</div>
                                <div className='td'>Date</div>
                                <div className='td'>Cost</div>
                                <div className='td'>Reservation</div>
                                <div className='td'>Time Alotted</div>
                                <div className='td'>Technician</div>
                                <div className='td'>Contact Technician</div>
                                <div className='td'></div>
                          
                              
                        </div>
                        <div className='tr'>
                              <div className='td'>1</div>
                              <div className='td'>Pest Control</div>
                              <div className='td'>5</div>
                              <div className='td'>02/25/2023</div>
                              <div className='td'>$1000</div>
                              <div className='td'>Scheduled</div>
                              <div className='td'>8:00 AM</div>
                              <div className='td'>Saul Goodman</div>
                              <div className='td'>+1 456-900-8090</div>
                              <div className='td'><a href="">CANCEL</a></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>2</div>
                            <div className='td'>Plumbing</div>
                            <div className='td'>9</div>
                            <div className='td'd>03/25/2023</div>
                            <div className='td'>--</div>
                            <div className='td'>Pending</div>
                            <div className='td'>--</div>
                            <div className='td'>--</div>
                            <div className='td'>--</div>
                            <div className='td'><a href="">CANCEL</a></div>

                        </div>
                      
                    </div>
                  <div className="button-row">
                      <div className="btn-after-table">
                        <div className='a'><Link to='/MaintenanceRequestForm' style={{ textDecoration: 'none', color: 'white' }}>Request Maintenance</Link></div>
                      </div>
                  </div>
  
              </div>    
          </div>
        </main>
        <Chat/>

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
  
    </div>
  );
}

// export default residentDashboard;
