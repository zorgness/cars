import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
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
import Myref from './components/Myref';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';
import Goku2 from './components/Goku2';
import Vegeta2 from './components/Vegeta2';
import Frieza from './components/Frieza';
import ErrorBoundary from './components/ErrorBondary';
import Docs from './components/Docs';
import Tutorial from './components/Tutorials';
import Community from './components/Community';
import ErrorPage from './components/ErrorPage';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'My Cars List',
      color: 'green',
      showModal: false,
      vegeta: 100,
      goku: 100,
      saiyan: true,

      underConstruction: {
        Docs: false,
        Tutorial: true,
        Community: false
      }
    }

    this.refComp = React.createRef();
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



  handleClick = () => {
    this.refComp.current.focus();

  }

  reduceLife = (param) => {

    param === 'Goku' ? this.setState({vegeta: this.state.vegeta - 10}) : this.setState({goku: this.state.goku - 10})
  }

  render() {

    const modal = this.state.showModal && (<SecondrootComponent close={this.handleClose}/>)
  return (
    <div className="App">
        <Mynavbar />

        <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Docs} />
              <Route path="/tutorial" component={Tutorial} />
              {/* <Route path="/tutorial" render={() => (

                this.state.underConstruction.Tutorial ? (<Redirect to="/" />) : (<Tutorial />)

              )}/> */}
              <Route strict path="/community/" component={Community } />
              <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>

        <hr />
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

        <hr/>

        <Myref ref={this.refComp}/>
        <button onClick={this.handleClick}>validation</button>

        <hr/>

        <div className="container text-center">
          <h1>Goku vs Vegeta</h1>
          <div className="row">

            <Vegeta name={(saiyan) => saiyan && "Vegeta" } saiyan={this.state.saiyan} life={this.state.vegeta} reduceLife={this.reduceLife}/>

            <Goku name="Goku" life={this.state.goku} reduceLife={this.reduceLife}/>

          </div>
        </div>

        <hr/>


        <div className="container text-center">
          <h1>Find the good guys</h1>

              <div className="d-flex justify-content-around align-items-center flex-wrap">

                <ErrorBoundary>
                  <Vegeta2 />
                </ErrorBoundary>

                <ErrorBoundary>
                  <Goku2 />
                </ErrorBoundary>

                <ErrorBoundary>
                  <Frieza />
                </ErrorBoundary>


              </div>

              <hr />







        </div>

    </div>

  );
  }
}

export default App;
