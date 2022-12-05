import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
//import Logout from './pages/Logout';
import RegisterPage from './pages/RegisterPage';
import AdminParking from './pages/Admin/Parking';
import Parking from './pages/User/Parking';
import CustomParking from './pages/CustomParking';
import ParkingGet from './pages/ParkingGet';

import { Helmet } from "react-helmet";
// Screens
import FirstLanding from "./pages/FirstLanding.jsx";

const App = () => {
    return (
    <> 
        <Routes>
            <Route path = "/" element = { < FirstLanding/> }/> 
            <Route path = "/login"element = { < Login /> }/> 
            <Route path = "/register" element = { < RegisterPage /> } />
            <Route path = "/admin/parking" element = { < AdminParking /> }/>
            <Route path = "/parking" element = { < Parking /> }/>
            <Route path = "/parking-custom" element = { < CustomParking /> }/>

        </Routes> 

        <Helmet> <link rel = "preconnect" href = "https://fonts.googleapis.com" />
        <link rel = "preconnect"
        href = "https://fonts.gstatic.com"
        crossorigin />
        <link href = "https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
        rel = "stylesheet" />
        </Helmet> </>
    );
};

export default App;