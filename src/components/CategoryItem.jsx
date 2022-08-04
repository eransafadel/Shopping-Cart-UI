import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #221f1f;
  color: #f7eaea;
  cursor: pointer;
  font-weight: 600;
`;

const Conatiner = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
 
  
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.5;
  }
  &:hover ${Image} {
    opacity: 0.5;
  }
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const CategoryItem = ({ item }) => {
  return (
    <Conatiner>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
          <Title />
          <Button>SHOP NOW</Button>
        </Info>
      </Link>
    </Conatiner>
  );
};

export default CategoryItem;
