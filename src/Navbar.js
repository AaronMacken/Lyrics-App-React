import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <header>
        <h2>Lyric Board</h2>
        <nav>
          <li onClick={this.props.open}>New</li>
          <li onClick={this.props.delete}>Delete</li>
        </nav>
      </header>
    );
  }
}

export default Navbar;