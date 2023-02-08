import styled from "styled-components"
import Navbar from "../components/Navbar"

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

function Home() {


  return (
    <Container>
      <Navbar />
    </Container>
  )
}

export default Home
