import { useState } from 'react';
import './App.css';
import Signin from './Components/Signin/Signin';
import { Signup } from './Components/Signup/Signup';
import loginContext from './Context/loginContext';
import { Header } from './Components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';

function App() {
  const [isLogin, setLogin] = useState({});
  return (
    <div>
      <Header/>
      <loginContext.Provider value={{ isLogin, setLogin }}>
        <Outlet/>
      </loginContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
