import { Route,Routes } from 'react-router-dom';
import {Home} from './Home/home';
import {AboutUs} from './AboutUs/AboutUs';
import Chat from './Chat/Chat';
import Nav from './Nav/Nav';
import {VisitorDashboard} from './VisitorDashboard/visitorDashboard';
import {VehicleRegistrationForm} from './VehicleRegistrationForm/VehicleRegistrationForm';
import {TennisMembershipForm} from './TennisMembershipForm/TennisMembershipForm';
import {TennisManager} from './TennisManager/TennisManager';
import {TennisMaintenance} from './TennisMaintenance/TennisMaintenance';
import {SecurityManager} from './SecurityManager/SecurityManager';
import {ResidentDashboard} from './ResidentDashboard/ResidentDashboard';
import {PoolVisitForm} from './PoolVisitForm/PoolVisitForm';
import {PoolManager} from './PoolManager/PoolManager';
import {PoolMaintenance} from './PoolMaintenance/PoolMaintenance';
import {OccupantForm} from './OccupantForm/OccupantForm';
import {NewSignup} from './NewSignup/NewSignup';
import {MembershipForm} from './MembershipForm/MembershipForm';
import {ManagerResidentForm} from './ManagerResidentForm/ManagerResidentForm';
import {ManagerVisitorForm} from './ManagerVisitorForm/ManagerVisitorForm';
import {MaintenanceRequestForm} from './MaintenanceRequestForm/MaintenanceRequestForm';
import {Login} from './Login/Login';
import {Gym} from './Gym/Gym';
import {GardenTiming} from './GardenTiming/GardenTiming';
import {GardenManager} from './GardenManager/GardenManager';
import {Forgot} from './Forgot/Forgot';
import {GardenMaintenance} from './GardenMaintenance/GardenMaintenance';
import {Floor} from './Floor/Floor';
import {EvaluateBookingForm} from './EvaluateBookingForm/EvaluateBookingForm';
import {EvaluateTennisBookingForm} from './EvaluateTennisBookingForm/EvaluateTennisBookingForm';
import {EditPoolTiming} from './EditPoolTiming/EditPoolTiming';
import {Contact} from './Contact/Contact';
import {BuildingManagerDashboard} from './BuildingManagerDashboard/BuildingManagerDashboard';
import {BookingForm} from './BookingForm/BookingForm';
import {Amenities} from './Amenities/Amenities';
import {AddWatchman} from './AddWatchman/AddWatchman';
import {AddVisitor} from './AddVisitor/AddVisitor';
import {AddViolation} from './AddViolation/AddViolation.js';
import { AddManagerForm } from './AddManagerForm/AddManagerForm';
import { EditGardenTiming } from './EditGardenTiming/EditGardenTiming';
import { AddHost} from './AddHost/addHost';
import { Report} from './Report/Report';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" element={<Chat/>}/>
        <Route path="/" element={<Nav/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/visitorDashboard" element={<VisitorDashboard/>}/>
        <Route path="/vehicleRegistrationForm" element={<VehicleRegistrationForm/>}/>
        <Route path='/EditGardenTiming' elements={<EditGardenTiming/>}/>
        <Route path="/tennisMembershipForm" element={<TennisMembershipForm/>}/>
        <Route path="/tennisManager" element={<TennisManager/>}/>
        <Route path="/tennisMaintenance" element={<TennisMaintenance/>}/>
        <Route path="/securityManager" element={<SecurityManager/>}/>
        <Route path="/residentDashboard" element={<ResidentDashboard/>}/>
        <Route path="/poolVisitForm" element={<PoolVisitForm/>}/>
        <Route path="/poolManager" element={<PoolManager/>}/>
        <Route path="/poolMaintenance" element={<PoolMaintenance/>}/>
        <Route path="/occupantForm" element={<OccupantForm/>}/>
        <Route path="/NewSignup" element={<NewSignup/>}/>
        <Route path="/membershipForm" element={<MembershipForm/>}/>
        <Route path="/managerVisitorForm" element={<ManagerVisitorForm/>}/>
        <Route path="/managerResidentForm" element={<ManagerResidentForm/>}/>
        <Route path="/maintenanceRequestForm" element={<MaintenanceRequestForm/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/gym" element={<Gym/>}/>
        <Route path="/gardenTiming" element={<GardenTiming/>}/>
        <Route path="/gardenManager" element={<GardenManager/>}/>
        <Route path="/gardenMaintenance" element={<GardenMaintenance/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/floor" element={<Floor/>}/>
        <Route path="/evaluateTennisBookingForm" element={<EvaluateTennisBookingForm/>}/>
        <Route path="/evaluateBookingForm" element={<EvaluateBookingForm/>}/>
        <Route path="/editPoolTiming" element={<EditPoolTiming/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/buildingManagerDashboard" element={<BuildingManagerDashboard/>}/>
        <Route path="/bookingForm" element={<BookingForm/>}/>
        <Route path="/amenities" element={<Amenities/>}/>
        <Route path="/addWatchman" element={<AddWatchman/>}/>
        <Route path="/addVisitor" element={<AddVisitor/>}/>
        <Route path="/addViolation" element={<AddViolation/>}/>
        <Route path="/addManagerForm" element={<AddManagerForm/>}/>
        <Route path="/addHost" element={<AddHost/>}/>
        <Route path="/Report" element={<Report/>}/>
    </Routes>
    
    
  );
}

export default App;