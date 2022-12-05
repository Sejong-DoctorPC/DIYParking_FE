import { Container, Box, Tab, Tabs, Typography, NativeSelect } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import axios from '../../api/axios';
import { BoxContainer } from '../accountBox/common';

import "./Status.css";

const MODE_URL = '/setmode';

const Status = () => {

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
    const dummy = [
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 1, 0],
    ];
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const params = {"mode": mode};
            const response = await axios.get(
                MODE_URL, 
                {params},
            {   
                headers: {
                    "Content-Type": "application/json",
                    //"Access-Control-Allow-Origin": "*",
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
            <Button varaint="contained" onClick={handleSubmit}>모드 변경</Button>
        </FormControl>
        <BoxContainer>
            { dummy.map((element, idx) => {
                return <div class="seat"></div>
            })}
        </BoxContainer>
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