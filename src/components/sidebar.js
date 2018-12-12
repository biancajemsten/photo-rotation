import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 20vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  position: absolute;
`

const SideBar = () => {
  return (
    <Wrapper>
      <h2>To Do list</h2>
    </Wrapper>
  )
}

export default SideBar;
