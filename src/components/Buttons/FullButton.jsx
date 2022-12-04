import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FullButton({ title, action, border, color, to }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border} color={color}
    > <Link to={to}>
      <Text>
      {title}
      </Text>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? props.border : "#ffc320")};
  background-color: ${(props) => (props.color ? props.color : "#ffc320")};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : "#d2900c")};
    border: 1px solid #ffc320;
    color: ${(props) => (props.border ? "#ffc320" : "#fff")};
  }
`;

const Text = styled.span`
  color: black;
  font-weight: bold;
`

