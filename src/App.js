import React, {useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Garage from './Garage.js';
import MyVerticallyCenteredModal from './services/MyVerticallyCenteredModal.js';
import Button from 'react-bootstrap/Button';

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
      <Button variant="link" onClick={() => setModalShow(true)}>
        Launch vertically centered modaltttttest
      </Button>
      <a href="" onClick={(event) => event.preventDefault()} >test</a>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

ㅁㅇㄹㅁㅇㄹ


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkitㅊㅊㅇㅊㅇ
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>

    </div>
  );
}

export default App;
