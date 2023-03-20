// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './gym.css';

export function Gym() {
  return (
    <div>
         {/* <!-- Start of the header --> */}
    <div className="sub-header">
        {/* <!-- Start of the navigation bar --> */}
        <nav>
            <a href="index.html"><img src ="TDG-logos.jpeg"/></a>
            <div className ="nav-links" id="nav_links">
                <i className="fa fa-times" onclick="hide_menu()"></i>
                <ul>
                    <li><a href="index.html"> HOME </a></li>
                    <li><a href="aboutus.html"> ABOUT US </a></li>
                    <li><a href="floor.html"> FLOOR PLANS </a></li>
                    <li><a href="amenities.html"> AMENITIES </a></li>
                    <li><a href="contact.html"> CONTACT US </a></li>
                    <li><a href="login.html"> LOGIN </a></li>
                    <li><a href="new_signup.html"> SIGNUP </a></li>
                </ul>
            </div>
            {/* <!-- Logo og TDG --> */}
            <i className="fa fa-bars" onclick="show_menu()"></i>
        </nav>
        {/* <!-- End of the navigation bar --> */}
        </div>
        {/* <!-- End of the header --> */}
        <div className="gym-containers">
            <h1>
                GYM MANAGER
            </h1>
            <p>
                TDG's health is my moto
            </p>
          {/* <!-- Code for the image gallery --> */}
           <div className="gallery">
            <img src="images/a.jpg" alt="gym"/>
            <img src="images/b.jpg" alt="gym"/>
            <img src="images/c.jpg" alt="gym"/>
            <img src="images/d.jpg" alt="gym"/>
            <img src="images/e.jpg" alt="gym"/>
            <img src="images/f.jpg" alt="gym"/>
            <img src="images/g.jpg" alt="gym"/>
            <img src="images/h.jpg" alt="gym"/>
            <img src="images/i.jpg" alt="gym"/>
            <img src="images/j.jpg" alt="gym"/>
            <img src="images/k.jpg" alt="gym"/>
            <img src="images/l.jpg" alt="gym"/>
            <img src="images/z.jpg" alt="gym"/>
           </div>
           {/* <!-- End of the image gallery --> */}

            <div className="gym-box">
                {/* <!-- Code for the top-left table(Membership Details)  --> */}
                <div className="gym-left">
                    <h2>Membership Details </h2>
                   <table className="maintain">
                    <tr>
                        <th>Memeber</th>
                        <th>Membership-type</th>
                        <th>Expiration date</th>
                    </tr>
                    <tr>
                        <td>D123</td>
                        <td>silver</td>
                        <td>02/01/23</td>
                    </tr>
                    <tr>
                        <td>A321</td>
                        <td>Gold</td>
                        <td>02/01/23</td>
                    </tr>
                    <tr>
                        <td>Y234</td>
                        <td>Diamond</td>
                        <td>02/01/23</td>
                    </tr>
                    <tr>
                        <td>W221</td>
                        <td>silver</td>
                        <td>02/01/23</td>
                    </tr>
                    <tr>
                        <td>Q432</td>
                        <td>Gold</td>
                        <td>02/01/23</td>
                    </tr>
                   </table>
                </div>
                {/* <!-- End of the top-left table --> */}

                <div className="gym-right">
                    <h2>Membership Requests </h2>
                    {/* <!-- Code for the top-right table(Membership Request) --> */}
                    <table className="maintain">
                        <tr>
                            <th>Memeber Request</th>
                            <th>Accept/Decline</th>
                        </tr>
                        <tr>
                            <td>X332</td>
                            <td><button id="approve">Approve</button><button id="reject">Reject</button></td>
                        </tr>
                        <tr>
                            <td>O098</td>
                            <td><button id="approve">Approve</button><button id="reject">Reject</button></td>
                        </tr>
                        <tr>
                            <td>H879</td>
                            <td><button id="approve">Approve</button><button id="reject">Reject</button></td>
                        </tr>
                        <tr>
                            <td>P098</td>
                            <td><button id="approve">Approve</button><button id="reject">Reject</button></td>
                        </tr>
                        <tr>
                            <td>S343</td>
                            <td><button id="approve">Approve</button><button id="reject">Reject</button></td>
                        </tr>
                    </table>
                    {/* <!-- End of the MEMBERSHIP REQUEST table --> */}
                </div>
                </div>
                <div className="gym-box">
                    {/* <!-- Code for the bottom-left MAINTAINANCE DETAILS table --> */}
                    <div className="gym-left">
                        <h2>Maintainance Details </h2>
                       <table className="maintain">
                        <tr>
                            <th>Maintianace of</th>
                            <th>Last maintainace</th>
                            <th>Next maintainace</th>
                        </tr>
                        <tr>
                            <td>Zumba floor</td>
                            <td>03/01/22</td>
                            <td>09/01/22</td>
                        </tr>
                        <tr>
                            <td>Sonar</td>
                            <td>08/01/22</td>
                            <td>08/01/23</td>
                        </tr>
                        <tr>
                            <td>Weight liftings</td>
                            <td>10/01/22</td>
                            <td>01/01/23</td>
                        </tr>
                        <tr>
                            <td>Air conditioners</td>
                            <td>08/01/22</td>
                            <td>02/01/23</td>
                        </tr>
                        <tr>
                            <td>Changing Rooms</td>
                            <td>08/06/22</td>
                            <td>02/06/23</td>
                        </tr>
                       </table>
                       {/* <!-- End of the MAITAINANCE DETAILS table --> */}
                    </div>
                    <div className="gym-right">
                        {/* <!-- Code for bottom-right SCHEDULED ACTIVITY table  --> */}
                        <h2>Scheduled Activities </h2>
                        <table className="maintain">
                            <tr>
                                <th>Activity</th>
                                <th>Scheduled on</th>
                                <th>time</th>
                            </tr>
                            <tr>
                                <td>Zumba</td>
                                <td>Wednusday</td>
                                <td>6 AM to 7 AM</td>
                            </tr>
                            <tr>
                                <td>Yoga</td>
                                <td>Monday</td>
                                <td>6 AM to 7 AM</td>
                            </tr>
                            <tr>
                                <td>Cross-fit</td>
                                <td>Tuesday</td>
                                <td>6 AM to 7 AM</td>
                            </tr>
                            <tr>
                                <td>Intense cardio</td>
                                <td>Thursday</td>
                                <td>6 AM to 7 AM</td>
                            </tr>
                            <tr>
                                <td>Kick boxing</td>
                                <td>Friday</td>
                                <td>6 AM to 7 AM</td>
                            </tr>
                        </table>
                        {/* <!-- End of the SCHEDULED ACTIVITY table --> */}
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
    </div>
    </div>
  );
}

// export default gym;
