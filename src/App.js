import './App.css';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home.js';
import Imagepath from './Imagepath';
import Imagedisplay from './Imagedisplay';
import Login from './Login';
import AuthProvider from './auth';
function App() {
  return (
    <AuthProvider>
    <div className="App">
      
      <nav>
        <ul>
        <li><Link to = "/" className='title'>Home</Link></li>
        <li><Link to = "imagepath" className='title'>Image</Link></li>
        <li> <Link to = "login" className='title'>Login</Link></li>
        <li id="head">WONDERS</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="Imagepath" element = {<Imagepath/>} >
          <Route path = ":imgpath" element = {<Imagedisplay/>} />
        </Route>
        <Route path = "Login" element = {<Login/>} />
      </Routes>
      
    </div>
    </AuthProvider>
  );
}

export default App;
