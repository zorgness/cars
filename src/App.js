import './App.css';
import React from 'react';
import Mycars from './Mycars';

class App extends React.Component {
  state = {
    title: 'My Cars List'
  }

  render() {
  return (
    <div className="App">
        <Mycars title={this.state.title} />
    </div>

  );
  }
}

export default App;
