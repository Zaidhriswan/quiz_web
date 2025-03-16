import './App.css';
import Home from './pages/Home';
import Gk from './pages/Gk';
import Maths from './pages/Maths' 
import Science from './pages/Science'
import Navbar from './components/Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/gk' element={<Gk/>}/>
            <Route path='/maths' element={<Maths/>}/>
            <Route path='/science' element={<Science/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
