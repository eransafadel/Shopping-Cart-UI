import React from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  color: #f0f0f0;
  background-color: #201e1e;
  letter-spacing: 1px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: black;
  }
`;

const Center = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Eransa</Logo>
        <Desc>
          Be the first to know about new arrivals, sales & promos by submitting
          your email! You can opt out at any time.privacy policy
        </Desc>

        <SocialContainer>
          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon>
            <YouTubeIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight:"10px"}}/> Jerusalem | Tel Aviv , Israel
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{marginRight:"10px"}}/> 055-6651982
        </ContactItem>
        <ContactItem>
          <MailOutlineIcon style={{marginRight:"10px"}} /> eransafadel@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
