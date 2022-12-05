import { useState, useEffect } from "react";
import TopNavbar from "../../components/Nav/TopNavbar";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';

import "./Parking.css";
import axios from "../../api/axios";
import { Button, Container } from "@mui/material";

const RESERVE_URL = "/reserve";
const CURRENT_STATUS_URL = "/current";
const GET_OUT_URL = "/getout";


const Parking = () => {

        /**현재 주차 현황 **/
        //let parkingLot = [];
        //for(var i=1; i<=36; i++) parkingLot.push(i);
    
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const fetchCars = async () => {
        try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setCars(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(CURRENT_STATUS_URL);
        //console.log(response);
        setCars(response.data); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
        setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCars();
    }, []);
    
    const isStatus = (zone, state) =>{
        
        if (zone == localStorage.getItem("zone")) return "item selected";
        else if (state == 2) return "item taken";
        else return "item"      
    };

    const [zone, setZone] = useState(null);
    
    const username = localStorage.getItem("Username");
    const isLoggedIn = localStorage.getItem("Log");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            setError(null);
            setZone(null);
            
            const params = {"user": username};
            const response = await axios.get(
                RESERVE_URL, 
                {params},
            {   
                headers: {
                    "Content-Type": "application/json",
                    //"Access-Control-Allow-Origin": "*",
                },
            });

            localStorage.setItem('isParked', true);
            localStorage.setItem('zone', response.data.zone)
            setZone(response.data.zone); // 데이터는 response.data 안에 들어있습니다.

            console.log(zone);
            //alert(`주차장 예약하기 성공! ${response.data.zone}번에 주차하세요😀`);
            alert(localStorage.getItem('zone') + '구역에 주차하세요!');

            //window.location.replace("/parking");
        
        } catch(err) {
            setError(err);
            console.log(err);
        } 
    };      
    
    //const ZONE = -1;
    const inTime = new Date().toLocaleDateString('ko-kr')

    const [outTime, setOutTime] = useState(null);
    const [fee, setFee] = useState(null);
    
    const handleGetOut = async (e) => {
        e.preventDefault();
        try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setOutTime(null);
        setFee(null); // 데이터는 response.data 안에 들어있습니다.

        // loading 상태를 true 로 바꿉니다.
        setLoading(true);

        const params = {"user": username};
        const response = await axios.get(
            GET_OUT_URL, 
            {params},
        {   
            headers: {
                "Content-Type": "application/json",
                //"Access-Control-Allow-Origin": "*",
            },
        });

        console.log(response.data);
        setOutTime(response.data.time); // 데이터는 response.data 안에 들어있습니다.
        setFee(response.data.fee); // 데이터는 response.data 안에 들어있습니다.
        localStorage.removeItem("isParked");
        localStorage.removeItem("zone");
        //window.location.replace("/parking");

        } catch (e) {
        setError(e);
        }
        setLoading(false);
    };

    const makeTimeString = (time) => {
        return parseFloat(time.slice(0, 5)) * 100; 
    }
    
    return (
        <>
            <TopNavbar />
            <Container className="reservation">
                <h1 id="welcome"> 안녕하세요, {username}님!</h1>
                
                {!isLoggedIn ? 
                    <div id="notify">
                    <span>임시 아이디: 63공1000, 임시 패스워드: User0101@ 로                         
                        <Button variant="text" id="login"><a href="/login">로그인</a></Button>해주세요!      
                    </span>
                    </div>
                    :
                <h3>오늘도 행복한 하루 되세요 *^^*</h3>
                }

                {localStorage.getItem('isParked') && localStorage.getItem('Log') ?             
                    <h3>{localStorage.getItem("zone")} 구역에 주차 완료 ✅ 
                        <button className="w-btn w-btn-red" onClick={handleGetOut}>출차하기</button> 
                    </h3>:
                    <button className="w-btn w-btn-red" onClick={handleSubmit}>예약하기</button> 
                } 
                <div id="layout"></div>       
                <div className="parent">
                    {cars && cars.map(car => (
                        <div className={isStatus(car.zone, car.state)} key={car.parker}>
                        {car.zone}
                        </div>
                    ))}
                </div>

                <div id="legend">
                    <div class="seat"></div> <div class="txt">이용 가능</div>
                    <div class="seat taken"></div> <div class="txt">이용 중</div>
                    <div class="seat selected"></div> <div class="txt">예약 완료</div>
                </div>
            </Container>
            <Container>
            <TableContainer id="table" component={Paper}>
                <Table sx={{ minWidth: 300 }}  aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>주차 정보</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    입차 시간       
                                </TableCell>
                                <TableCell align="right">{inTime}</TableCell>                                
                            </TableRow>
                            <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    출차 시간       
                                </TableCell>
                                <TableCell align="right">{outTime}</TableCell>                                
                            </TableRow>  
                            <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    주차 요금    
                                </TableCell>
                                <TableCell align="right">{fee}</TableCell>                                
                            </TableRow>                        
                        </TableBody>
                    </Table>
            </TableContainer>
            </Container>
        </>
    );
};

export default Parking;