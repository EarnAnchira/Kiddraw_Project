import './App.css';
import Navbar from './componants/nav'
import Canvas from './componants/drawing';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Canvas
        width = {700}
        height = {500}
      />
    </div>
  );
}

export default App;
