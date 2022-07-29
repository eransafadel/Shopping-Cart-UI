import React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Typewriter from "typewriter-effect";
import {
  URL_HOMEPAGE_SHOPPING as SHOPPING_PHOTO,
  TEXT_DESCRIPTION as DESCRIPTION,
} from "./macros";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: whitesmoke;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.7;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
  margin-left: 70px;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosNewIcon />
      </Arrow>
      <Wrapper>
        <Slide bg="FFF4D8">
          <ImageContainer>
            <Image src={SHOPPING_PHOTO} />
          </ImageContainer>

          <InfoContainer>
            <Title>
              {" "}
              <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .typeString("SUMMER SALE")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("20% OFF")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("SUMMER SALE")
                    .start()
                }}
              />
            </Title>
            <Desc>{DESCRIPTION}</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="FFF4D8">
          <ImageContainer>
            <Image src={SHOPPING_PHOTO} />
          </ImageContainer>

          <InfoContainer>
            <Title>POPULAR SALE</Title>
            <Desc>{DESCRIPTION}</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="FFF4D8">
          <ImageContainer>
            <Image src={SHOPPING_PHOTO} />
          </ImageContainer>

          <InfoContainer>
            <Title>WINTER SALE</Title>
            <Desc>{DESCRIPTION}</Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
