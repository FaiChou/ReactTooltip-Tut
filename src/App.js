import React, { Component } from 'react';
import Modal from './Modal';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
      modalVisible: false,
    };
    this.showModal = this.showModal.bind(this);
  }
  showModal() {
    const dimensions = this.el.getBoundingClientRect();
    const left = dimensions.left;
    const top = dimensions.top + dimensions.height + 10;
    const height = 200;
    const width = 200;
    const style = { left, top, height, width };
    this.setState({
      style,
      modalVisible: true,
    });
  }
  render() {
    const modal = this.state.modalVisible && (
      <Modal>
        <div className="modal" style={this.state.style}>
          <p>Hello, World!</p>
          <button onClick={() => this.setState({ modalVisible: false })}>
            Hide
          </button>
        </div>
      </Modal>
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { modal }
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          ref={el => this.el = el}
          onClick={this.showModal}>
          Show
        </button>
      </div>
    );
  }
}

export default App;
