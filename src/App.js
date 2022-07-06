//import logo from './logo.svg';
import './App.css';
import Car from './components/car';
import Node from './components/node';

function App() {
  // const stepsArray = [0, 1, 2];
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header className="My-header">
        <Car color="black"/>
        <Node color="pink"/>
        {/* {stepsArray.map((item, index) => <Node key={item} color="pink"/> )} */}
      </header>
    </div>
  );
}

export default App;
