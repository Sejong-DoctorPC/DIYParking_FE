import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Logout from './pages/Logout';
import RegisterPage from './pages/RegisterPage';
import Parking from './pages/Parking';
import ParkingGet from './pages/ParkingGet';

import { Helmet } from "react-helmet";
// Screens
import FirstLanding from "./pages/FirstLanding.jsx";

const App = () => {
<<<<<<< HEAD
    return ( <
        >
        <
        Routes >
        <
        Route path = "/"
        element = { < FirstLanding / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/register"
        element = { < RegisterPage / > }
        /> <
        Route path = "/parking"
        element = { < Parking / > }
        /> <
        Route path = "/parking-get"
        element = { < ParkingGet / > }
        /> <
        Route path = "/logout"
        element = { < Logout / > }
        />

        <
        /Routes> <
        Helmet >
        <
        link rel = "preconnect"
        href = "https://fonts.googleapis.com" / >
        <
        link rel = "preconnect"
        href = "https://fonts.gstatic.com"
        crossorigin / >
        <
        link href = "https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
        rel = "stylesheet" / >
        <
        /Helmet> <
        />
    );
=======
  return (
    <>
      <Routes>
        <Route path="/" element={<FirstLanding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/parking" element={<Parking/>} />
        <Route path="/parking-get" element={<ParkingGet/>} />
        <Route path="/logout" element={<Logout/>} />
        
      </Routes>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
    </>
  );
>>>>>>> 6ea564552f6b12c6622bb24ef307f1f5228a0861
};

export default App;
