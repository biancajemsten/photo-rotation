import React from 'react';
import styled from 'styled-components';
import SideBar from './components/sidebar'
import Informatics from './components/Informatics'
import Links from './components/Links';

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`

const Image = styled.div`
  background-position: center;
  background-image: ${props => props.selectedPhoto.backgroundImage};
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
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
      const randomNumber = Math.ceil((Math.random()*17));
      this.setState({currentImage: randomNumber});
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
        <div>
          <Links/>
          <Informatics/>
          <ImageContainer>
            <Image
              className="fade"
              selectedPhoto={{
                backgroundImage: `url(${image})`
              }}
            />
            {/* <img className="fade" src={image} alt="bild"/> */}
          </ImageContainer>
        </div>
      )}

    }

export default Home;
