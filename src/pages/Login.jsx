import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { mobile } from ".././responsive";
import { login } from "../redux/apiCalls";

const URL_IMG =
  "https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(70, 3, 85, 0.5), rgba(255, 255, 255, 0.5)),
    url(${URL_IMG}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  
  padding: 15px 20px;
  background-color: #131515;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover {
    background-color: #f9eaea;
    color: #131515;
    
    border-color: black;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {



  const [username,setUsername]= useState("");
  const [password,setPassword]= useState("");
  const dispach = useDispatch();

  const handleLoginClick = (e)=>{
    e.preventDefault();
    login(dispach,{username,password})

  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
          <Input placeholder="password" type="password"  onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleLoginClick}>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
