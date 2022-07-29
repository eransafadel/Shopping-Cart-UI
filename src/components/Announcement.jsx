import styled from "styled-components";

const Container = styled.div`
  height: 40px;
  background-color: #0d0e0e;
  display: flex;
  align-items: center;
  color:white;
  font-size:14px;
  font-weight: 500;
  justify-content: center;
`



const Announcement = () => {
    return <Container>Super Deal! Free Shipping on Orders Over $50</Container>;
  };
  
  export default Announcement;