import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  height: 450px;
  /* margin: 10px; */
  border-radius: 5px;
  padding: 20px 10px;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const SList = styled.ul`
  height: 90%;
  overflow-y: scroll;
`;

const List = ({ name, children }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <SList>{children}</SList>
    </Container>
  );
};

export default List;
