import Beingrahuul from "../assets/BEINGRAHUUL.svg"
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #ccfeff;
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
  border: 1px solid #00a3a6;
  outline: none;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
`

const Button = styled.div`
  height: 30px;
  border: 1px solid #00a3a6;
  padding: 0px 5px;
  display: flex;
  align-items: center;
  background-color: #caffdd;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
`

function Navbar() {
  return (
    <Container>
      <Logo src={Beingrahuul}/>
      <Search />
      <Button>Add a photo</Button>
    </Container>
  )
}

export default Navbar