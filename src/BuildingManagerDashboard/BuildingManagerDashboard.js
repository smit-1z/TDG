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

export function BuildingManagerDashboard() {
  return (
    <div>
        <link rel="stylesheet" type="text/css" href="https://demo.plantpot.works/assets/css/normalize.css"/>
        <link rel="stylesheet" href="https://use.typekit.net/opg3wle.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Header/>

        <main>
            <h1>Building Manager Dashboard</h1>
            <h1>Welcome Ned</h1>
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
                            <div className='td'>     </div>
                            <div className='td'>Mon  </div>
                            <div className='td'>Tue  </div>
                            <div className='td'>Wed  </div>
                            <div className='td'>Thur </div>
                            <div className='td'>Fri  </div>
                            <div className='td'>Sat  </div>
                            <div className='td'>Sun  </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>In Time: </div>
                            <div className='td'>8:00 AM  </div>
                            <div className='td'>8:00 AM  </div>
                            <div className='td'>8:00 AM  </div>
                            <div className='td'>8:00 AM  </div>
                            <div className='td'>8:00 AM  </div>
                            <div className='td'>8:00 AM  </div>
                            <div className='td'>--       </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>Out Time: </div>
                            <div className='td'>6:00 PM   </div>
                            <div className='td'>6:00 PM   </div>
                            <div className='td'>6:00 PM   </div>
                            <div className='td'>6:00 PM   </div>
                            <div className='td'>6:00 PM   </div>
                            <div className='td'>6:00 PM   </div>
                            <div className='td'>--        </div>
                        </div>
                    </div>


                    {/* <!----------RESIDENT List---------------------> */}

                    <h6>Resident Details</h6>
                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>#               </div>
                            <div className='td'>First Name      </div>
                            <div className='td'>Last Name       </div>
                            <div className='td'>Email ID        </div>
                            <div className='td'>DOB             </div>
                            <div className='td'>Govt Id         </div>
                            <div className='td'>Apt No          </div>
                            <div className='td'>Contact No      </div>
                            <div className='td'>Apartment Type  </div>
                            <div className='td'>No of Occupants </div>
                            <div className='td'>                </div>
                            <div className='td'>                </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>1                                   </div>
                            <div className='td'>res                                 </div>
                            <div className='td'>las                                 </div>
                            <div className='td'>res.las@gmail.com                   </div>
                            <div className='td'>09/09/1960                          </div>
                            <div className='td'>***-***-6755                        </div>
                            <div className='td'>235                                 </div>
                            <div className='td'>111-345-8900                        </div>
                            <div className='td'>Studio                              </div>
                            <div className='td'>1                                   </div>
                            <div className='td'><a href="">EDIT</a>                 </div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>1                                  </div>
                            <div className='td'>rickon                             </div>
                            <div className='td'>stark                              </div>
                            <div className='td'>rickon.stark@gmail.com             </div>
                            <div className='td'>09/08/1960                         </div>
                            <div className='td'>***-***-1256                       </div>
                            <div className='td'>205                                </div>
                            <div className='td'>110-305-7900                       </div>
                            <div className='td'>Town House                         </div>
                            <div className='td'>4                                  </div>
                            <div className='td'><a href="">EDIT</a>                </div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/ManagerResidentForm' style={{ textDecoration: 'none', color: 'white' }}>Add Resident</Link></div>
                            
                        </div>
                    </div>



                    {/* <!---------VISITORS--------------------------------> */}

                    <h6>Visitor Details</h6>
                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>#                 </div>
                            <div className='td'>First Name        </div>
                            <div className='td'>Last Name         </div>
                            <div className='td'>Visitor Email ID  </div>
                            <div className='td'>Govt ID           </div>
                            <div className='td'>Contact No        </div>
                            <div className='td'>Vehicle Type      </div>
                            <div className='td'>License Plate     </div>
                            <div className='td'>                  </div>
                            <div className='td'>                  </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>1                                  </div>
                            <div className='td'>Theon                              </div>
                            <div className='td'>Greyjoy                            </div>
                            <div className='td'>theon@gmail.com                    </div>
                            <div className='td'>***-***-9000                       </div>
                            <div className='td'>345-678-1234                       </div>
                            <div className='td'>Car                                </div>
                            <div className='td'>ABC 900                            </div>
                            <div className='td'><a href="">EDIT</a>                </div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/ManagerVisitorForm' style={{ textDecoration: 'none', color: 'white' }}>Add Visitor</Link></div>
                        </div>
                    </div>


                    {/* <!----------Security Manager-------------------> */}

                    <h6>Security Manager List</h6>

                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>#               </div>
                            <div className='td'>First Name      </div>
                            <div className='td'>Last Name       </div>
                            <div className='td'>Email ID        </div>
                            <div className='td'>DOB             </div>
                            <div className='td'>Govt Id         </div>
                            <div className='td'>Contact No      </div>
                            <div className='td'>Adress Line 1   </div>
                            <div className='td'>Adress Line 2   </div>
                            <div className='td'>Manager Type    </div>
                            <div className='td'>                </div>
                            <div className='td'>                </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>1                                   </div>
                            <div className='td'>Dwight                              </div>
                            <div className='td'>Schrute                             </div>
                            <div className='td'>dwight@gmail.com                    </div>
                            <div className='td'>08/08/1960                          </div>
                            <div className='td'>***-***-6055                        </div>
                            <div className='td'>123-000-5643                        </div>
                            <div className='td'>670 W Abram St                      </div>
                            <div className='td'>Arlington, Texas                    </div>
                            <div className='td'>Security                            </div>
                            <div className='td'><a href="">EDIT</a>                 </div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>2                                  </div>
                            <div className='td'>Michael                            </div>
                            <div className='td'>Scott                              </div>
                            <div className='td'>scott@gmail.com                    </div>
                            <div className='td'>02/03/1960                         </div>
                            <div className='td'>***-***-6155                       </div>
                            <div className='td'>123-000-5893                       </div>
                            <div className='td'>671 W Abram St                     </div>
                            <div className='td'>Arlington, Texas                   </div>
                            <div className='td'>Security                           </div>
                            <div className='td'><a href="">EDIT</a>                </div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/AddManagerForm' style={{ textDecoration: 'none', color: 'white' }}>Add Manager</Link></div>
            
                        </div>
                    </div>


                    {/* <!----------Garden Manager------------------> */}

                    <h6>Garden Manager List</h6>

                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>#             </div>
                            <div className='td'>First Name    </div>
                            <div className='td'>Last Name     </div>
                            <div className='td'>Email ID      </div>
                            <div className='td'>DOB           </div>
                            <div className='td'>Govt Id       </div>
                            <div className='td'>Contact No    </div>
                            <div className='td'>Adress Line 1 </div>
                            <div className='td'>Adress Line 2 </div>
                            <div className='td'>Manager Type  </div>
                            <div className='td'>              </div>
                            <div className='td'>              </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>1                                  </div>
                            <div className='td'>Dwight                             </div>
                            <div className='td'>Schrute                            </div>
                            <div className='td'>dwight@gmail.com                   </div>
                            <div className='td'>08/08/1960                         </div>
                            <div className='td'>***-***-6055                       </div>
                            <div className='td'>123-000-5643                       </div>
                            <div className='td'>670 W Abram St                     </div>
                            <div className='td'>Arlington, Texas                   </div>
                            <div className='td'>Garden                             </div>
                            <div className='td'><a href="">EDIT</a>                </div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>2                                   </div>
                            <div className='td'>Michael                             </div>
                            <div className='td'>Scott                               </div>
                            <div className='td'>scott@gmail.com                     </div>
                            <div className='td'>02/03/1960                          </div>
                            <div className='td'>***-***-6155                        </div>
                            <div className='td'>123-000-5893                        </div>
                            <div className='td'>671 W Abram St                      </div>
                            <div className='td'>Arlington, Texas                    </div>
                            <div className='td'>Garden                              </div>
                            <div className='td'><a href="">EDIT</a>                 </div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/AddManagerForm' style={{ textDecoration: 'none', color: 'white' }}>Add Manager</Link></div>
                            
                        </div>
                    </div>

                    {/* <!---------------Pool Manager-----------> */}

                    <h6>Pool Manager List</h6>

                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>#</div>
                            <div className='td'>First Name</div>
                            <div className='td'>Last Name</div>
                            <div className='td'>Email ID</div>
                            <div className='td'>DOB</div>
                            <div className='td'>Govt Id</div>
                            <div className='td'>Contact No</div>
                            <div className='td'>Adress Line 1</div>
                            <div className='td'>Adress Line 2</div>
                            <div className='td'>Manager Type</div>
                            <div className='td'></div>
                            <div className='td'></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>1</div>
                            <div className='td'>Dwight</div>
                            <div className='td'>Schrute</div>
                            <div className='td'>dwight@gmail.com</div>
                            <div className='td'>08/08/1960</div>
                            <div className='td'>***-***-6055</div>
                            <div className='td'>123-000-5643</div>
                            <div className='td'>670 W Abram St</div>
                            <div className='td'>Arlington, Texas</div>
                            <div className='td'>Pool</div>
                            <div className='td'><a href="">EDIT</a></div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>2</div>
                            <div className='td'>Michael</div>
                            <div className='td'>Scott</div>
                            <div className='td'>scott@gmail.com</div>
                            <div className='td'>02/03/1960</div>
                            <div className='td'>***-***-6155</div>
                            <div className='td'>123-000-5893</div>
                            <div className='td'>671 W Abram St</div>
                            <div className='td'>Arlington, Texas</div>
                            <div className='td'>Pool</div>
                            <div className='td'><a href="">EDIT</a></div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/AddManagerForm' style={{ textDecoration: 'none', color: 'white' }}>Add Manager</Link></div>
                        </div>
                    </div>

                    {/* <!--------------Tennis Court Manager-----------> */}

                    <h6>Tennis Court Manager List</h6>

                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>#</div>
                            <div className='td'>First Name</div>
                            <div className='td'>Last Name</div>
                            <div className='td'>Email ID</div>
                            <div className='td'>DOB</div>
                            <div className='td'>Govt Id</div>
                            <div className='td'>Contact No</div>
                            <div className='td'>Adress Line 1</div>
                            <div className='td'>Adress Line 2</div>
                            <div className='td'>Manager Type</div>
                            <div className='td'></div>
                            <div className='td'></div>
                        </div>
                        <div className='tr'>
                            <div className='td'>1                                 </div>
                            <div className='td'>Dwight                            </div>
                            <div className='td'>Schrute                           </div>
                            <div className='td'>dwight@gmail.com                  </div>
                            <div className='td'>08/08/1960                        </div>
                            <div className='td'>***-***-6055                      </div>
                            <div className='td'>123-000-5643                      </div>
                            <div className='td'>670 W Abram St                    </div>
                            <div className='td'>Arlington, Texas                  </div>
                            <div className='td'>Tennis Court                      </div>
                            <div className='td'><a href="">EDIT</a>               </div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>2                                 </div>
                            <div className='td'>Michael                           </div>
                            <div className='td'>Scott                             </div>
                            <div className='td'>scott@gmail.com                   </div>
                            <div className='td'>02/03/1960                        </div>
                            <div className='td'>***-***-6155                      </div>
                            <div className='td'>123-000-5893                      </div>
                            <div className='td'>671 W Abram St                    </div>
                            <div className='td'>Arlington, Texas                  </div>
                            <div className='td'>Tennis Court                      </div>
                            <div className='td'><a href="">EDIT</a>               </div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/AddManagerForm' style={{ textDecoration: 'none', color: 'white' }}>Add Manager</Link></div>
                        </div>
                    </div>

                    {/* <!----------------Gym Manager--------------------> */}

                    <h6>Gym Manager List</h6>

                    <div className='table'>
                        <div className='tr, th'>
                            <div className='td'>#            </div>
                            <div className='td'>First Name   </div>
                            <div className='td'>Last Name    </div>
                            <div className='td'>Email ID     </div>
                            <div className='td'>DOB          </div>
                            <div className='td'>Govt Id      </div>
                            <div className='td'>Contact No   </div>
                            <div className='td'>Adress Line 1</div>
                            <div className='td'>Adress Line 2</div>
                            <div className='td'>Manager Type </div>
                            <div className='td'>             </div>
                            <div className='td'>             </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>1                                  </div>
                            <div className='td'>Dwight                             </div>
                            <div className='td'>Schrute                            </div>
                            <div className='td'>dwight@gmail.com                   </div>
                            <div className='td'>08/08/1960                         </div>
                            <div className='td'>***-***-6055                       </div>
                            <div className='td'>123-000-5643                       </div>
                            <div className='td'>670 W Abram St                     </div>
                            <div className='td'>Arlington, Texas                   </div>
                            <div className='td'>Gym                                </div>
                            <div className='td'><a href="">EDIT</a>                </div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                        <div className='tr'>
                            <div className='td'>2                                  </div>
                            <div className='td'>Michael                            </div>
                            <div className='td'>Scott                              </div>
                            <div className='td'>scott@gmail.com                    </div>
                            <div className='td'>02/03/1960                         </div>
                            <div className='td'>***-***-6155                       </div>
                            <div className='td'>123-000-5893                       </div>
                            <div className='td'>671 W Abram St                     </div>
                            <div className='td'>Arlington, Texas                   </div>
                            <div className='td'>Gym                                </div>
                            <div className='td'><a href="">EDIT</a>                </div>
                            <div className='td'><a href="">DELETE</a>                 </div>
                        </div>
                    </div>
                    <div className="button-row">
                        <div className="btn-after-table">
                            <div className='a'><Link to='/AddManagerForm' style={{ textDecoration: 'none', color: 'white' }}>Add Manager</Link></div>
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

// export default buildingManagerDashboard;
