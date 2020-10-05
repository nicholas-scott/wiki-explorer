import React, { Component } from 'react';
import { Box, Anchor, Text } from 'grommet';
import Styled from 'styled-components';

let Title = (props) => {
  return (
    <Box 
      margin='auto'
      height='18%'
      width='100%'
      >
      <Text textAlign='center' margin='auto'><Anchor href={'https://en.wikipedia.org/wiki/' + props.title} label={props.title} /></Text>
    </Box>
  )
}

class WikiDoor extends Component {
  state = generateColor();
  render(){
    return (
        <Box
          height='wikiDoor-height'
          width='wikiDoor-width'
          margin='auto'>
            <Title title={this.props.title}></Title>
            <DoorCrown>
              <DoorLight/>
            </DoorCrown>
            <DoorFrame onClick={this.props.doorClicked}>
              <DoorDoor colors={this.state}></DoorDoor>
            </DoorFrame>
        </Box>
    )
  }
}

class DoorDoor extends Component {
  state = {className:  `door${Math.floor(Math.random() * 8) + 1}`}
  render(){
    console.log(this.state.className);
    return(
      <DoorDoorStyled className={this.state.className} style={{
        backgroundColor: this.props.colors.doorColor,
        borderColor: this.props.colors.doorColor2}}>
      </DoorDoorStyled>
    )
  }
}





let DoorCrown = Styled.div`
  height: 5%;
  width: 100%;
  display: block;
  background-color: #636363;
  clip-path: polygon(0% 103%, 10% 30%, 28% 60%, 40% 0%, 60% 0%, 72% 60%, 90% 30%, 100% 103%);
`
let DoorLight = Styled.div`
  width: 15px;
  height: 15px;
  position: relative;
  background-color: #dd2b2b;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-width: 2px;
  order-style: solid;
  border-color: #701515;
`

let DoorFrame = Styled.div`
  height: 82%;
  margin: 0 auto;
  width: 100%;
  border-color: #636363;
  border-style: solid;
  border-width: 10px;
  background-color: #333333;

  &:hover div {
    transform: perspective(2000px) translateZ(0px)  translateX(-1px) translateY(-1px) rotateY(-45deg);
  }
`

let DoorDoorStyled = Styled.div`
  background-repeat:no-repeat;
  background-size:contain;
  border-style: solid;
  border-width: 5px;
  transform: translateX(-1px) translateY(-1px);
  transform-origin: left;
  width: 101%;
  height: 101%;
  transition: all 0.1s ease-in-out
`

let generateColor = () => {
  let a = Math.floor(Math.random() * 11 + 90);
  let b = Math.floor(Math.random() * 11 + 50);
  let c = Math.floor(Math.random() * 356);

  let color1 = `hsl(${c}, ${a}%, ${b}%)`
  let color2 = `hsl(${c}, ${a}%, ${100 - b}%)`
  let color3 = `hsl(${c}, ${a}%, ${((100 - b) + b) /2}%)`
  return {doorColor: color1, doorColor2: color2, doorColor3: color3}
}

export default WikiDoor;
