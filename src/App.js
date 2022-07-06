//import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import Node from './components/node';

function App() {
  // const stepsArray = [0, 1, 2];
  
  return (
    <div className="App">
      <header className="My-header">
        <Title text="React Flow Diagram"/>
        <Node color="pink"/>
        {/* {stepsArray.map((item, index) => <Node key={item} color="pink"/> )} */}
      </header>
    </div>
  );
}

export default App;
