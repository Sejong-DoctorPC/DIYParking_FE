import { Container, Box, Tab, Tabs, Typography, Button, NativeSelect } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import axios from '../../api/axios';

import "./Status.css";

const Status = () => {
    const MODE_URL = '/setmode';

    const MODE_SELECT = ['기본', '캠핑', '영화', '재난'];
    
    let mode = null;
    const [errMsg, setErrMsg] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        if(value=='기본') mode = 0;
        else if(value=='캠핑') mode = 1;
        else if(value=='영화') mode = 2;
        else if(value=='재난') mode = 3;
        console.log(mode);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                MODE_URL, 
                JSON.stringify({mode}),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
            console.log(JSON.stringify(response?.data));
    
            alert("주차장 모드 바꾸기 성공!");

            //window.location.replace("/");
        
        } catch(err) {
            if (!err?.response) setErrMsg('No Server Response');
            else setErrMsg('Request Failed');
            console.log(errMsg);
        } finally {
            setErrMsg('');
        }
    };


    return (
    <Container maxWidth="sm">
        <FormControl>
            <NativeSelect
            defaultValue={mode}
            value={mode}
            onChange={(e) => handleChange(e)}>
                {
                MODE_SELECT.map((mode, idx) => {
                    return <option key={idx} value={mode}>{mode}모드</option>
                })
                }
            </NativeSelect>
            <Button onClick={handleSubmit}>모드 변경</Button>
        </FormControl>
        <Container>   
            <div id="legend">
                <div class="seat"></div> <div class="txt">이용 가능</div>
                <div class="seat taken"></div> <div class="txt">이용 중</div>
                <div class="seat disabled"></div> <div class="txt">장애인 주차구역</div>
            </div>
        </Container>   
    </Container>
    );
};  
export default Status