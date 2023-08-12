import { Route,  Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/LoginPage/Login';
import { Signup } from './pages/SignUpPage/Signup';
import {LandingPage} from './pages/LandingPage/LandingPage';
import { HomePage } from './pages/HomePage/HomePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
