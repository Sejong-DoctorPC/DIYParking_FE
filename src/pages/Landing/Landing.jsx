import { useForm } from "react-hook-form";
import React, { useRef, useState, useEffect, useContext } from 'react';
import styled from "styled-components";
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
const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /* 크기 */
  height: 2.25rem;
  width: 7rem;

  /* 색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
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

          <StyledButton type="submit">주차장 생성</StyledButton>

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
