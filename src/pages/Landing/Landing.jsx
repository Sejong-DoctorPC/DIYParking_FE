import { useForm } from "react-hook-form";
import React, { useRef, useState, useEffect, useContext } from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';
import "./Landing.css";

const PARKING_SIZE = 36;

const Input = styled.input`
  font-size: 15px;
  padding: 10px;
  margin: 10px;
  background: whitesmoke;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: gray;
  }
`;


export const Landing = ({ triggerTransition, setParkingSlotsCount }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    const parkingSize = Number(data.parkingSize);
    if (parkingSize && typeof parkingSize === "number") {
      setParkingSlotsCount(parkingSize);
    }
    triggerTransition();
  };

  return (
    <div>
        <header>
        나만의 주차장을 만들어볼까요?
        </header>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder={`원하는 크기 입력(1-${PARKING_SIZE})`}
            type="number"
            {...register("parkingSize", {
              required: true,
              maxLength: 2,
              min: 1,
              max: PARKING_SIZE,
            })}
          />

          <Button variant="contained" type="submit">주차장 생성</Button>

          {errors.parkingSize && (
            <p>
              주차장 사이즈는 최소 1부터 36까지 가능합니다. (최대 사이즈: {PARKING_SIZE}{" "})
            </p>
          )}
        </form>
      </section>
    </div>
  );
};
