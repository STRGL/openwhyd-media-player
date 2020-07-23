import React from 'react';
import './MediaPlayer';
import '../App.css';
import MediaPlayer from './MediaPlayer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        skip: 0,
        genre: 'ALL'
     }
     this.handleSkip = this.handleSkip.bind(this);
  }

    //* HANDLE CALLING ALL THE HOT TRACKS
    handleSkip(e) {
    //* REWORKING TO USE THE HASMORE.SKIP PROPERTY
    //   console.log(e.currentTarget.dataset);
      //* CAST BACK INTO A NUMBER
      const skipAmount = Number(e.currentTarget.dataset.skip);
    //   console.log(`${skipAmount}`);
      //* SETTING STATE TO PLUS/MINUS 20 BUT A MINIMUM OF 0
      this.setState((prevState) => {
          return ({
              //* CHANGED SKIP AMOUNT TO USE MAX VALUE INSTEAD OF USING BELOW
              // skip: prevState.skip + skipAmount >= 0 ? prevState.skip + skipAmount : 0
              skip: skipAmount
          })
      })
  }

  render() { 
    return ( 
      <MediaPlayer skip={this.state.skip} genre={this.state.genre} handleSkip={this.handleSkip}/>
    );
  }
}
 
export default App;

