import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPaze from './Components/log_sign';
import LandingPage from './Components/Welocm';

const username = new URLSearchParams(window.location.search).get('username');

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPaze/>}></Route>
        <Route path='/land' element={<LandingPage username={username}/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
