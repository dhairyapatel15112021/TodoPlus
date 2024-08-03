import axios from 'axios';
import React, { useContext, useState } from 'react'
//import { useNavigate } from 'react-router-dom';
import loginContext from '../../Context/loginContext';

const Signin = () => {

  const { isLogin, setLogin } = useContext(loginContext);
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  function setValues(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function submitForm() {
    try {
      const response = await axios.post("http://localhost:5040/signin", formData);
      if (response.data.token) {
        localStorage.setItem("token", `bearer ${response.data.token}`);
        setLogin(() => true);
        alert("Sucessfully Login");
      }
      else {
        alert("Something Went Wrong " + response.data.error);
      }
    }
    catch (err) {
      alert("Error : " + err);
    }
  }
  return (
    <form style={{ display: 'flex', flexDirection: 'column', width: '30%', justifyContent: 'center', alignItems: 'center', height: '70vh', margin: '10vh 35%' }}>
      <div style={{ fontSize: "2vmax", fontWeight: "bold" }}>Sign in</div>
      <div style={{border : "1px solid black" , borderRadius : "5px" , padding : "1% 2%"  , width : "70%" ,margin:"4% 0%"}}>
        <div style={{padding : "1%",fontWeight : "500"}}>Email</div>
        <input type="text" name="username" placeholder='Enter your email' style={{outline:"none", padding: '1%', width : "90%", fontSize: '1.1vmax',border : "none", }} onChange={(e) => setValues(e)} />
      </div>
      <div style={{border : "1px solid black" , borderRadius : "5px" , padding : "1% 2%"  , width : "70%"}}>
        <div style={{padding : "1%",fontWeight : "500"}}>Password</div>
        <input type="password" name="password" placeholder='Enter your password' style={{outline:"none", padding: '1%', width : "90%", fontSize: '1.1vmax',border : "none", }} onChange={(e) => setValues(e)} />
      </div>
      <div style={{ margin: '1% 6%', textAlign: 'center', marginTop: '3%', fontSize: '1.2vmax' , width : "50%" }}>* All Fields are Mandatory</div>
      <button type="button" style={{ padding: '2%', margin: '1%', marginTop: '3%', fontSize: '1.2vmax',width:"70%",borderRadius:"5px",backgroundColor : "#0275d8",border : "none",color : "#ffffff",fontWeight : "700",cursor:"pointer" }} onClick={submitForm}>Submit</button>
    </form>
  )
}

export default Signin;