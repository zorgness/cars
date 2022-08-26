import './App.css';
import React from 'react';
import Mycars from './components/Mycars';
import Welcome from './components/Welcome';
import Parent from './components/Parent';
import Display from './components/Display';
import Game from './components/Game';
import Form from './components/Form';
import Mynavbar from './components/Navbar';
import Lifecycle from './components/Lifecycle';
import Example from './components/Modal';
import SecondrootComponent from './components/SecondrootComponent';

class App extends React.Component {
  state = {
    title: 'My Cars List',
    color: 'green',
    showModal: false
  }

  changeTitle = () => {
    this.setState({title: 'New cars'});
  }

  changeViaParam = (title) => {
    this.setState({title})
  }

  changeViaBind(param) {
    this.setState({
      title: param
    })
  }
  changeViaInput = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleShow = () => {
    this.setState({showModal: true})
  }

  handleClose = () => {
    this.setState({showModal: false})
  }

  render() {

    const modal = this.state.showModal && (<SecondrootComponent close={this.handleClose}/>)
  return (
    <div className="App">
        <Mynavbar />
        <Parent />
        <Welcome />
        <Mycars title={this.state.title} color={this.state.color}/>

        <button onClick={this.changeTitle}>change title</button>
        <button onClick={() => this.changeViaParam('Via param')}>change title param</button>
        <button onClick={this.changeViaBind.bind(this, 'Via bind')}>change title bind</button>

        <input type="text" onChange={this.changeViaInput} value={this.state.title} placeholder="change by input" />

        <hr/>

        <Display />

        <hr/>

        <Game />

        <hr/>

        <Form />

        <hr/>

        <Lifecycle  />

        <hr/>

        <Example />

        <hr/>

        <div className='test-modal'>
        <button onClick={this.handleShow}>show modal</button>
          { modal }

        </div>
    </div>

  );
  }
}

export default App;
