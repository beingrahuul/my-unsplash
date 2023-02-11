import { useState } from "react"
import styled from "styled-components"
import DP from "../assets/SVG/user-svgrepo-com.svg"
import HEART from "../assets/SVG/heart-svgrepo-com.svg"
import ADD from "../assets/SVG/add-circle-svgrepo-com.svg"
import SHARE from "../assets/SVG/share-svgrepo-com.svg"


const Container = styled.div`
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 20px;
  break-inside: avoid;
  position: relative;
  border-radius: 20px;
`
const Image = styled.img`
  max-width: 100%;
  display: block;
  grid-row: 1 / -1;
  border-radius: 20px;
  grid-column: 1;
`
const Info = styled.div`
  position: absolute;
  top: 0px;
  color: white;
  background-color: #0000009b;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
  gap: 10px;
`

const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 5;
  gap: 10px;
  p{
    margin: 0;
  }
`

const Pesron = styled.img`
  height: 40px;
`


const Icons = styled.div`
  display: flex;
  gap: 10px;
  background-color: transparent;
  justify-content: space-around;
  width: 90%;
  flex: 1;
`

const Icon = styled.img`
  height: 28px;
  &:hover{
    scale: 1.2;
    cursor: pointer;
  }
`

function Card({src, author}) {
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(true)
  }
  const handleExit = () => {
    setHover(false)
  }

  return (
    <Container onMouseOver={handleHover} onMouseLeave={handleExit}>
      <Image src={src} />
      {hover &&
      <Info>
        <User>
          <Pesron src={DP}/>
          <p>{author}</p>
        </User>
        <Icons>
          <Icon src={HEART}/>
          <Icon src={ADD}/>
          <Icon src={SHARE}/>
        </Icons>
      </Info>}
    </Container>
  )
}

export default Card