import Status from "../../components/ParkingStatus/Status";
import { Container } from "@mui/material";

import "./Parking.css";

const AdminParking = () => {
    return (
      <Container>
        <div className="header">
            <h3>🚗 관리자 페이지 🚗</h3>
        </div>
        <Status></Status>
      </Container>
    );
  };
  
export default AdminParking;