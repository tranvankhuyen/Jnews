import './App.css';
import Navbar from './Components/Navbar';
import { Route as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div id="header" className='bg-blue-50'>
        <Navbar />
      </div>
    </div>
  );
}



export default App;
