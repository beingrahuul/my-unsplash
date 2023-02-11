import styled from "styled-components"
import Navbar from "../components/Navbar"
import FormCard from "../components/FormCard"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Main = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  align-items: center;
  justify-content: center;
`

function CreatePost() {
  return (
    <Container>
      <Navbar />
      <Main>
        <FormCard />
      </Main>
    </Container>
  )
}

export default CreatePost