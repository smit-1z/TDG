// import logo from './logo.svg';
/* 
KETA MODI - 1001947989
HELLY SHUKLA - 1002028499
AVISH MODI - 1002069301
RIDHAM TELI - 1002091174 
SMIT JOSHI - 1001946718*/
import './residentdashboard.css';


export function Report() {
  return (
    <div>
    <main>
        <h1>REPORT</h1>
        

        {/* <!--- START WITH ALL TABLES FROM HERE-----> */}

        <div className="center-align">
            <div className ="occupant-list">


            

                {/* <!----------RESIDENT List---------------------> */}

                <h6>Resident Details</h6>
                <table>
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>DOB</th>
                            <th>Govt Id</th>
                            <th>Apt No</th>
                            <th>Contact No</th>
                            <th>Apartment Type</th>
                            <th>No of Occupants</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>res</td>
                            <td>las</td>
                            <td>res.las@gmail.com</td>
                            <td>09/09/1960</td>
                            <td>***-***-6755</td>
                            <td>235</td>
                            <td>111-345-8900</td>
                            <td>Studio</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>rickon</td>
                            <td>stark</td>
                            <td>rickon.stark@gmail.com</td>
                            <td>09/08/1960</td>
                            <td>***-***-1256</td>
                            <td>205</td>
                            <td>110-305-7900</td>
                            <td>Town House</td>
                            <td>4</td>
                        </tr>
                    </tbody>
                </table>
                



                {/* <!---------VISITORS--------------------------------> */}

                <h6>Visitor Details</h6>
                <table>
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Visitor Email ID</th>
                            <th>Govt ID</th>
                            <th>Contact No</th>
                            <th>Vehicle Type</th>
                            <th>License Plate</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Theon</td>
                            <td>Greyjoy</td>
                            <td>theon@gmail.com</td>
                            <td>***-***-9000</td>
                            <td>345-678-1234</td>
                            <td>Car</td>
                            <td>ABC 900</td>
        
                        </tr>
                    </tbody>
                </table>
                


                {/* <!----------Security Manager-------------------> */}

                <h6>Security Manager List</h6>

                <table>
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>DOB</th>
                            <th>Govt Id</th>
                            <th>Contact No</th>
                            <th>Adress Line 1</th>
                            <th>Adress Line 2</th>
                            <th>Manager Type</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dwight</td>
                            <td>Schrute</td>
                            <td>dwight@gmail.com</td>
                            <td>08/08/1960</td>
                            <td>***-***-6055</td>
                            <td>123-000-5643</td>
                            <td>670 W Abram St</td>
                            <td>Arlington, Texas</td>
                            <td>Security</td>
                            
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Michael</td>
                            <td>Scott</td>
                            <td>scott@gmail.com</td>
                            <td>02/03/1960</td>
                            <td>***-***-6155</td>
                            <td>123-000-5893</td>
                            <td>671 W Abram St</td>
                            <td>Arlington, Texas</td>
                            <td>Security</td>
                            
                        </tr>
                    </tbody>
                </table>

                {/* <!----------Garden Manager------------------> */}

                <h6>Garden Manager List</h6>

                <table>
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>DOB</th>
                            <th>Govt Id</th>
                            <th>Contact No</th>
                            <th>Adress Line 1</th>
                            <th>Adress Line 2</th>
                            <th>Manager Type</th>
        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dwight</td>
                            <td>Schrute</td>
                            <td>dwight@gmail.com</td>
                            <td>08/08/1960</td>
                            <td>***-***-6055</td>
                            <td>123-000-5643</td>
                            <td>670 W Abram St</td>
                            <td>Arlington, Texas</td>
                            <td>Garden</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Michael</td>
                            <td>Scott</td>
                            <td>scott@gmail.com</td>
                            <td>02/03/1960</td>
                            <td>***-***-6155</td>
                            <td>123-000-5893</td>
                            <td>671 W Abram St</td>
                            <td>Arlington, Texas</td>
                            <td>Garden</td>
                        </tr>
                    </tbody>
                </table>

                {/* <!---------------Pool Manager-----------> */}

                <h6>Pool Manager List</h6>

                <table>
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>DOB</th>
                            <th>Govt Id</th>
                            <th>Contact No</th>
                            <th>Adress Line 1</th>
                            <th>Adress Line 2</th>
                            <th>Manager Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dwight</td>
                            <td>Schrute</td>
                            <td>dwight@gmail.com</td>
                            <td>08/08/1960</td>
                            <td>***-***-6055</td>
                            <td>123-000-5643</td>
                            <td>670 W Abram St</td>
                            <td>Arlington, Texas</td>
                            <td>Pool</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Michael</td>
                            <td>Scott</td>
                            <td>scott@gmail.com</td>
                            <td>02/03/1960</td>
                            <td>***-***-6155</td>
                            <td>123-000-5893</td>
                            <td>671 W Abram St</td>
                            <td>Arlington, Texas</td>
                            <td>Pool</td>
                        </tr>
                    </tbody>
                </table>

                {/* <!--------------Tennis Court Manager-----------> */}

                <h6>Tennis Court Manager List</h6>

                <table>
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>DOB</th>
                            <th>Govt Id</th>
                            <th>Contact No</th>
                            <th>Adress Line 1</th>
                            <th>Adress Line 2</th>
                            <th>Manager Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dwight</td>
                            <td>Schrute</td>
                            <td>dwight@gmail.com</td>
                            <td>08/08/1960</td>
                            <td>***-***-6055</td>
                            <td>123-000-5643</td>
                            <td>670 W Abram St</td>
                            <td>Arlington, Texas</td>
                            <td>Tennis Court</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Michael</td>
                            <td>Scott</td>
                            <td>scott@gmail.com</td>
                            <td>02/03/1960</td>
                            <td>***-***-6155</td>
                            <td>123-000-5893</td>
                            <td>671 W Abram St</td>
                            <td>Arlington, Texas</td>
                            <td>Tennis Court</td>
                        </tr>
                    </tbody>
                </table>

                {/* <!----------------Gym Manager--------------------> */}

                <h6>Gym Manager List</h6>

                <table>
                    
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email ID</th>
                            <th>DOB</th>
                            <th>Govt Id</th>
                            <th>Contact No</th>
                            <th>Adress Line 1</th>
                            <th>Adress Line 2</th>
                            <th>Manager Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dwight</td>
                            <td>Schrute</td>
                            <td>dwight@gmail.com</td>
                            <td>08/08/1960</td>
                            <td>***-***-6055</td>
                            <td>123-000-5643</td>
                            <td>670 W Abram St</td>
                            <td>Arlington, Texas</td>
                            <td>Gym</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Michael</td>
                            <td>Scott</td>
                            <td>scott@gmail.com</td>
                            <td>02/03/1960</td>
                            <td>***-***-6155</td>
                            <td>123-000-5893</td>
                            <td>671 W Abram St</td>
                            <td>Arlington, Texas</td>
                            <td>Gym</td>
                        </tr>
                    </tbody>
                </table>

            </div>    
        </div>
    </main>
    

</div>
  );
}

// export default report;
