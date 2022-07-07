//import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import Node from './components/node';

const canvasStyle = {
  position: 'relative',
  height: '60vh',
  background: 'white',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
};

function App() {
  // const stepsArray = [0, 1, 2];
  
  return (
    <div className="App">
      <header className="My-header">
        <Title text="React Flow Diagram"/>
        <div style={canvasStyle} id="canvas">
          <Node color="pink"/>
        </div>
        {/* {stepsArray.map((item, index) => <Node key={item} color="pink"/> )} */}
      </header>
    </div>
  );
}

export default App;
