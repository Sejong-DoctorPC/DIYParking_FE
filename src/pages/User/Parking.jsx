import { useState } from "react";
import TopNavbar from "../../components/Nav/TopNavbar";

import "./Parking.css";
import axios from "../../api/axios";
import { Button, Container } from "@mui/material";

const RESERVE_URL = "/reserve";

const Parking = () => {

    const [zone, setZone] = useState(null);
    const [error, setError] = useState(null);

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
    const outTime = '00.00.00';

    let parkingLot = [];
    for(var i=1; i<=36; i++){
        parkingLot.push(i);
    }
    
    return (
        <>
            <TopNavbar />
            <Container className="reservation">
                <h1 id="welcome"> 안녕하세요, {username}님!</h1>
                
                {!isLoggedIn ? 
                    <div id="notify">
                    <span>임시 아이디: 75공3014, 임시 패스워드: User0101@ 로                         
                        <Button variant="text" id="login"><a href="/login">로그인</a></Button>해주세요!      
                    </span>
                    </div>
                    :
                <h3>오늘도 행복한 하루 되세요 *^^*</h3>
                }

                {localStorage.getItem('isParked') ?             
                    <h3>{localStorage.getItem("zone")} 구역에 주차 완료 ✅</h3>:
                    <button className="w-btn w-btn-red" onClick={handleSubmit}>예약하기</button> 
                } 
                <div id="layout"></div>       
                <div className="parent">
                {parkingLot.map((element, index) => (
                    <div className={element == localStorage.getItem("zone") ? "taken item" : "item"} key={index}>
                    {element}
                    </div>
                ))}
                </div>
                <h3>입차 시간: {inTime}</h3>
                <h3 id="out">출차 시간: {outTime}</h3>
                <h3 id="fare">예상 요금: {}원</h3>        
            </Container>
        </>
    );
};

export default Parking;