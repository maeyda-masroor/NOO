import logo from './logo.svg';
import './App.css';
import TopNavbar from './component/TopNavbar';
import Navbar from './component/Navbar';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter>
      <TopNavbar/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
