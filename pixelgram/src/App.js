import { Route,  Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages/LoginPage/Login';
import { Signup } from './pages/SignUpPage/Signup';
import {LandingPage} from './pages/LandingPage/LandingPage';
import { HomePage } from './pages/HomePage/HomePage';
import RequiresAuth from './Components/RequiresAuth';
import { ExplorePage } from './pages/ExplorePage/ExplorePage';
import { BookmarkPage } from './pages/BookmarkPage/BookmarkPage';
import { ProfilePage } from './pages/Profile/ProfilePage';
import { OthersProfilePage } from './pages/OthersProfile/OthersProfilePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<RequiresAuth><HomePage /></RequiresAuth>} />
        <Route path='/explore' element={<RequiresAuth><ExplorePage /></RequiresAuth>} />
        <Route path='/bookmarks' element={<RequiresAuth><BookmarkPage /></RequiresAuth>} />
        <Route path='/userprofile' element={<RequiresAuth><ProfilePage /></RequiresAuth>} />
        <Route path='/userprofile/:userId' element={<RequiresAuth><OthersProfilePage /></RequiresAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
