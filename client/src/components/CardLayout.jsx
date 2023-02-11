import styled from "styled-components"
import {IMAGE} from "../assets/image"
import Card from "./Card"

const Container = styled.div`
  margin: 20px;
  column-count: 4;
  column-gap: 20px;
  max-width: 1980px;
  @media (max-width: 1300px) {
    column-count: 3;
    column-gap: 20px;
  }

  @media (max-width: 1000px) {
    column-count: 2;
    column-gap: 20px;
  }

  @media (max-width: 600px) {
    column-count: 1;
    column-gap: 15px;
  }
`
function CardLayout() {
  return (
    <Container>
      {IMAGE.map((img) => (
        <Card src={img.download_url} key={img.id} author={img.author}/>
      ))}
    </Container>
  )
}

export default CardLayout
