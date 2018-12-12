import React from 'react';
import styled from 'styled-components';

const Icon = styled.img`
  fill: white;
  height: 30px;
  width: auto;
`

const Wrapper = styled.div`
  position: absolute;
  bottom: 5vh;
  left: 5vh;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 120px;
`

const Links = () => {
  const seb = require('../Images/SEB_logo.svg');
  const mail = require('../Images/59965.svg');
  return (
    <Wrapper>
      <a href="mailto:">
        <Icon src={mail}/>
      </a>
      <a href="https://seb.se/">
      <Icon src={seb}/>
    </a>
    </Wrapper>
  )
}

export default Links;
