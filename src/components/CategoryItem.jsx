import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Button = styled.button`
  bottom: 0;
  right: 0;
  margin-right: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: none;
  padding: 10px;
  width: 200px;
  background-color: black;
  font-weight: 700;
  color: white;
  cursor: pointer;
`;

const Conatiner = styled.div`
  flex: 1;
  margin: 10px;
  height: 70vh;
  position: relative;

`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-style: solid;
  border-color: gray;
  ${mobile({ height: "20vh" })}
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  /* width: 100%;
  height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Conatiner>
      <Image src={item.img} />
      <Button>SHOP NOW</Button>
    </Conatiner>
  );
};

export default CategoryItem;
