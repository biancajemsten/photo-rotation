import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`


class Home extends React.Component {
    constructor() {
      super()
      this.state ={
        currentImage: 1
      }
    }

    rotateImage = () => {
      clearInterval(rotating);
      const rotating = setInterval(() => {
        let state = Object.assign({}, this.state);
        if(state.currentImage < 17){ this.setState({currentImage:  state.currentImage+1})}
        else(this.setState({currentImage: 1}))
      }, 15000)
    }

    componentDidMount(){
      this.rotateImage()
    }

    render(){
      console.log('in render',this.state.currentImage)
      const image = require(`./Images/${this.state.currentImage}.jpg`)
      return(
        <ImageContainer >
          <img className="fade" src={image} alt="bild"/>

        </ImageContainer>

      )}

    }

export default Home;
