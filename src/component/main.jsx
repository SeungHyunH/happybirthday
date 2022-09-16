import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <Wrap>
      <Cake src='birthday_cake.png'></Cake>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #F8F7F3;
  background-image: url('/birthday_bg.jpg');
  background-repeat : no-repeat;
  background-position: center;
  background-size : 100vw;
`

const Cake = styled.img`
  width: 50%;
  padding-left: 25%;
  margin-top: 130%;
  :active{
    filter: brightness(50%);
  }
`

export default Main