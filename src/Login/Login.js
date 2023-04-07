// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './log-for.css';
import { Header } from '../Header/header';
import { Link } from 'react-router-dom';
import tdg1 from "../images/TDG.png";
import axios from 'axios';
import { useEffect, useState } from 'react';


export function Login() {

    const [members,setMembers]=useState({});

    useEffect(()=>{
        getMembers();
    },[]);
    function getMembers(){
        axios.get("http://localhost/api/signup/").then(function(response){
            console.log(response.data);
            setMembers(response.data);
        });
    }

  return (
    <div>
        <Header/>
        
        <div className="logfor-containers">
            <h1>
                Log in here
            </h1>
            <p>
                Almost there...Please log in here with your credentials
            </p>
            <div className="logfor-box">
                <div className="logfor-left">
                    {/* <!-- Code for the login form --> */}
                    <form action="" className="form">
                        <h2>
                            Log in
                        </h2>
                            <div className="logfor-input-group">
                                <label ><b>UserName</b></label>
                                <input type="text" placeholder="Emial or phone number" className="box"/>
                            </div>
                            <div className="logfor-input-group">
                                <label><b>Password</b></label>
                                <input type="password" placeholder="######" className="box"/>
                            </div>
                            {/* <!-- Submit Button of login form --> */}
                            <div className="forget"><Link to='/Forgot'>Forgot password</Link></div>
                        <button type="submit">Login</button>                       
                    </form>
                    
                    {/* <!-- End of the login form --> */}
                    <h3>Dont have an account?....<a href="/NewSignup">Signup here</a></h3>
                    
        <div className="logfor-input-group">  
            <button><Link  to ='/ResidentDashboard' style={{ textDecoration: 'none', color: 'white' }}>Resident</Link></button>
            <button><Link to ='/VisitorDashboard' style={{ textDecoration: 'none', color: 'white' }}>Visitor</Link></button>
            <button><Link to ='/TennisManager' style={{ textDecoration: 'none', color: 'white' }}>Tennis Manager</Link></button>
            <button><Link to ='/PoolManager' style={{ textDecoration: 'none', color: 'white' }}>Pool Manager</Link></button>
            <button><Link to ='/BuildingManagerDashboard' style={{ textDecoration: 'none', color: 'white' }}>Building Manager</Link></button>
            <button><Link to ='/GardenManager' style={{ textDecoration: 'none', color: 'white' }}>Garden Manager</Link></button>
            <button><Link to ='/SecurityManager' style={{ textDecoration: 'none', color: 'white' }}>Security Manager</Link></button>   
            {/* <button><Link to ='/Gym' style={{ textDecoration: 'none', color: 'white' }}>Gym Manager</Link></button> */}
        </div>

                </div>
                
                {/* <!-- Right side image of login form --> */}
                <div className="logfor-right">
                       {/* <img src="TDG-logos.jpeg" width="500" height="500"/>
                       <img src={tdg1}/> */}
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
    </div>
  );
}

// export default login;
