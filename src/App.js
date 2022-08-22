import './App.css';
import React from 'react';
import Mycars from './Mycars';

class App extends React.Component {
  state = {
    title: 'My Cars List',
    color: 'green'
  }

  render() {
  return (
    <div className="App">
        <Mycars title={this.state.title} color={this.state.color}/>
    </div>

  );
  }
}

export default App;
