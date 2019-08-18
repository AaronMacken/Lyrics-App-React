import React from 'react';
import './App.css';
import Navbar from './Navbar';
import LyricCard from './LyricCard';
import Modal from './Modal';
import ModalBackDrop from './ModalBackDrop';

class App extends React.Component {
  // default state for the app, comes with some sample data, booleans for controlling the ui,
  // and an index for tracking data items
  constructor(props) {
    super(props);
    this.state = {
      isShowingModal: false,
      isShowingClose: false,
      songs: [
        {
          id: 0,
          bandName: "Oathbreaker",
          songName: "Stay Here",
          img: "https://f4.bcbits.com/img/a3153393733_16.jpg",
          lyrics: `roam the gloaming of the highway
          I'll follow your hesitant steps
          observing the hastening world beside us
          I lean forward to slow you down
          nobody watches us from their glass boxes
          the days are moving fast ahead
          shifting in between day and night
          as the roads curl before them, we're alone
          hand out your troubles, give me your pain
          I'll plant them next to the thorns in my veins
          tie your limbs to my crippled life
          hang on, I'll carry you around
          storms lay down and come to rest
          confusion returns to how it's always been
          I let you replace the taste of my pain
          with the comforting of your frail skin
          hand out your troubles, give me your pain
          I'll plant them next to the thorns in my veins
          tie your limbs to my crippled life
          hang on, I'll carry you around`
        },
        {
          id: 1,
          bandName: "Amenra",
          songName: "Terziele Tottedood",
          img: "https://f4.bcbits.com/img/a2126782811_16.jpg",
          lyrics: `slaan
          zalven
          slaan
          zalven
          
          mijn ziel splijt en ik zie geen bloed
          ik weet niet hoe te helen
          haken van ijzer en spijt
          ik weet niet meer hoe te leven
        
          (Translation)
          strike
          anoint
          strike
          anoint

          splits my soul and I see no blood
          I do not know how to heal
          hooks of iron and regret
          I do not know how to live any more`
        }
      ],
      nextSongId: 2
    }

    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  // functions that modify the is booleans for components that show or hide
  // they act as a switch, passed in as props and used as on click function's for the certain components
  // they will trigger the boolean which changes the current style based off of the boolean's state

  openModalHandler = () => {
    this.setState({
      isShowingModal: true
    });
  }
  closeModalHandler = () => {
    this.setState({
      isShowingModal: false
    });
  }

  closeHandler = () => {
    this.setState((prevState) => {
      return {
        isShowingClose: !prevState.isShowingClose
      }
    });
  }

  // we will pass this function into the form as a prop (through the modal into the InputForm Component)
  // the function accepts some data and re-assigns the state to include the new values that were passed in
  // the data will be passed into the function from the form's state and will then update the top level state 
  // that contains all of the data for the LyricCard components that will be rendered
  handleSave(songData) {
    this.setState((prevState, props) => {
      const newSong = { ...songData, id: this.state.nextSongId };
      return {
        nextSongId: prevState.nextSongId + 1,
        songs: [...this.state.songs, newSong],
        isShowingModal: false
      }
    });
  }

  // function that will create a new state array with everything in the current array
  // except for the one that was clicked, resulting in one item being removed.
  onDelete(id) {
    const songs = this.state.songs.filter(stateItem => stateItem.id !== id);
    this.setState({ songs});
  }


  render() {

    const defaultCards = this.state.songs.map((data, index) => {
      return <LyricCard key={data.id} id={data.id} bandName={data.bandName}
        songName={data.songName}
        img={data.img} lyrics={data.lyrics}
        show={this.state.isShowingClose}
        onDelete={this.onDelete} />
    })

    return (
      <div className="App">
        <Navbar open={this.openModalHandler} delete={this.closeHandler} />
        <ModalBackDrop show={this.state.isShowingModal} close={this.closeModalHandler} />
        <Modal className="modal" show={this.state.isShowingModal} close={this.closeModalHandler} onSave={this.handleSave}></Modal>
        {defaultCards}
      </div>
    );
  }
}

export default App;

// a component that renders 16 smaller components
