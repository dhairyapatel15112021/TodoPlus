import { useState } from 'react';
import './App.css';
import Signin from './Components/Signin/Signin';
import { Signup } from './Components/Signup/Signup';
import loginContext from './Context/loginContext';

function App() {
  const [isLogin, setLogin] = useState({});
  return (
    <div>
      <loginContext.Provider value={{ isLogin, setLogin }}>
        <Signin />
      </loginContext.Provider>

      {/* <Signup/> */}
    </div>
  );
}

export default App;
