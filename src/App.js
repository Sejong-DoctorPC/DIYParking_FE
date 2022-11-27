import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { Helmet } from "react-helmet";
// Screens
import Landing from "./pages/Landing.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
    </>
  );
};

export default App;
