
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 
import '../src/index.css';
import Card from './pages/Card.js';
import Home from './pages/Home.js';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home /> } />
          <Route path ='/card' element={<Card />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
