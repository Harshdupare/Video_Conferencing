
import './App.css'
import Home from './pages/Home'
import {Route , BrowserRouter, Routes} from 'react-router-dom';
import Room from './pages/Room';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
          <Route path='/' element={<Login/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/home' element={<Home/>} />
          <Route path='/meet/:roomId' element={<Room/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
