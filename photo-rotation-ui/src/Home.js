import React from 'react';


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
        console.log(this.state.currentImage)
        let state = Object.assign({}, this.state);
        console.log('currentImage', state.currentImage)
        if(state.currentImage < 17){ this.setState({currentImage:  state.currentImage+1})}
        else(this.setState({currentImage: 0}))
      }, 5000)
    }

    componentDidMount(){
      this.rotateImage()
    }

    render(){
      console.log('in render',this.state.currentImage)
      const image = require(`./Images/${this.state.currentImage}.jpg`)
      return(
        <div>
          <img src={image} alt="bild"/>

        </div>

      )}

    }

export default Home;
