import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/auth';
import Home from './pages/home';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
