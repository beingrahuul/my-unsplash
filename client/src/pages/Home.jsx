import styled from "styled-components"
import CardLayout from "../components/CardLayout"
import Navbar from "../components/Navbar"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Photo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`

function Home() {


  return (
    <Container>
      <Navbar />
      <Photo>
        <CardLayout />
      </Photo>
    </Container>
  )
}

export default Home
