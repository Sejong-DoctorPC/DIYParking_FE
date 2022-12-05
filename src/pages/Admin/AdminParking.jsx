import { useState, useEffect } from "react";
import TopNavbar from "../../components/Nav/TopNavbar";

import "./AdminParking.css";
import axios from "../../api/axios";
import { Button, Container, FormControl, NativeSelect} from "@mui/material";

const MODE_URL = "/setmode";
const CURRENT_STATUS_URL = "/current";

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
        } 
        
        catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCars();
    }, []);


    const leftCount = () => {
        var count = 0;
        cars.map(car => {
            if (car.state==1) count++;
        });

        return count;
    }

    //const left = leftCount(cars);

    const username = localStorage.getItem("Username");
    const isLoggedIn = localStorage.getItem("Log");     
    
    const PARKING_MODE = ['기본', '캠핑', '영화관', '재난 대피'];
    const [ mode, setMode ] = useState(localStorage.getItem("mode"));


    const handleChange = (e) => {
        const value = e.target.value;
        setMode(value)
    };

    const showModeNum = (mode) => {
        if(mode == '기본') return 0;
        else if(mode == '캠핑') return 1;
        else if(mode == '영화관') return 2;
        else if(mode == '재난 대피') return 3;
    };

    const handleMode = async (e) => {
        e.preventDefault();
        try {
            if (window.confirm('정말 주차장 모드를 변경하시겠습니까?')){
                setError(null);
                setMode(null);

                const params = {"mode": showModeNum(mode)};
                const response = await axios.get(
                    MODE_URL, 
                    {params},
                {   
                    headers: {
                        "Content-Type": "application/json",
                        //"Access-Control-Allow-Origin": "*",
                    },
                });
                console.log(response.data);
                localStorage.setItem("mode", mode);
                setMode(mode);
                //setCars(response.data);
                window.location.replace("/admin/parking");    
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <TopNavbar />
            <Container className="reservation">
                <h1 id="welcome"> 안녕하세요, {username}님!</h1>
                
                {!isLoggedIn ? 
                    <div id="notify">
                    <span>임시 아이디: admin01, 임시 패스워드: Admin1234@ 로                         
                        <Button variant="text" id="login"><a href="/login">로그인</a></Button>해주세요!      
                    </span>
                    </div>
                    :
                <h3>현재 주차 모드는 {mode}입니다🚗</h3>
                }
                <div id="form">
                    <FormControl id="mode-option">
                        <NativeSelect
                            defaultValue={mode}
                            value={mode}
                            onChange={(e) => handleChange(e)}
                        >
                        {
                        PARKING_MODE.map((mode, idx) => {
                            return <option key={idx} value={mode}>{mode}모드</option>
                        })
                        }
                        </NativeSelect>
                        <Button variant="contained" onClick={handleMode} style={{"margin-left": "10px"}}>모드 변경</Button>     
                    </FormControl>
                </div>
                <div id="layout"></div>       
                <div className="parent">
                    {cars && cars.map(car => (
                        <div className={car.state ? "item taken" : "item"} key={car.parker}>
                        {car.zone}
                        </div>
                    ))}
                </div>

                <div id="legend">
                    <div class="seat taken"></div> <div class="txt">이용 중</div>
                </div>


            </Container>
        </>
    );
};

export default Parking;