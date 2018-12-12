import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const Wrapper = styled.div`
  z-index: 2;
  width: 20vw;
  height: 20vh;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
  top: 10vh;
  right: 10vh;
  color: white;
  padding: 10px;
`

  
const Informatics = () => {
  let date = moment().format("dddd, MMM Do");
  let time = moment().format("HH:mm")
  return (
    <Wrapper>
      <h1>{time} </h1>
      <h2>{date}</h2>
    <hr/>

    </Wrapper>
  )
}

export default Informatics;
