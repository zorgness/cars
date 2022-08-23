import './App.css';
import React from 'react';
import Mycars from './components/Mycars';
import Welcome from './components/Welcome';
import Parent from './components/Parent';
import Display from './components/Display';
import Game from './components/Game';

class App extends React.Component {
  state = {
    title: 'My Cars List',
    color: 'green'
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

  render() {
  return (
    <div className="App">
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
    </div>

  );
  }
}

export default App;
