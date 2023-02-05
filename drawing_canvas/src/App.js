import './App.css';
import Navbar from './componants/nav'
import Canvas from './componants/drawing';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <div className="canvas">
        <Canvas
          width = {500}
          height = {700}
        />
      </div>


      <div className="tool">
        <button type="button" className="button"> UNDO </button>
        <button type="button" className="button"> CLEAR </button>
        <button type="button" className="button"> SAVE </button>
      </div>

    </div>
  );
}

export default App;
