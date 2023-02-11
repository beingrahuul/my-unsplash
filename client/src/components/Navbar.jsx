import Beingrahuul from "../assets/BEINGRAHUUL.svg"
import styled from "styled-components"

const Container = styled.div`
  height: 80px;
  background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;

`

const Logo = styled.img`
  height: 18px;
`

const Search = styled.input`
  width: 40%;
  height: 30px;
  border-radius: 0px;
  border: 1px solid #000000;
  outline: none;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
`

const Button = styled.div`
  height: 30px;
  border: 1px solid #000000;
  padding: 2px 5px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  font-weight: 700;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.316);
  cursor: pointer;
  &:hover{
    border: 1px solid #ff9c9c;
    background-color: #000000;
    color: white;
  }
`

function Navbar() {
  return (
    <Container>
      <Logo src={Beingrahuul}/>
      <Button>Add a photo</Button>
    </Container>
  )
}

export default Navbar