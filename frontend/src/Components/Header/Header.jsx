import React from 'react'
import {NavLink} from 'react-router-dom';
export const Header = () => {
  return (
    <div style={{padding:'3vh 2vw'}}>
        <div style={{display: "flex",justifyContent:"space-between"}}>
            <div style={{fontSize:'1.3rem',fontWeight:'bold'}}>TaskTrack</div>
            <div style={{display : "flex" ,alignItems:"center", justifyContent : "space-between",width:"30vw",fontSize:'1.1rem',fontWeight:'500',color:'black'}}>
              <NavLink style={{textDecoration : "none",color:'black'}} to="/">Home</NavLink>
              <NavLink style={{textDecoration : "none",color:'black'}}>AboutUs</NavLink>
              <NavLink style={{textDecoration : "none",color:'black'}}>Todo</NavLink>
              <NavLink style={{textDecoration : "none",color:'black'}} to="/signup">SignUp</NavLink>
              <NavLink style={{textDecoration : "none",color:'black'}} to="/signin">SignIn</NavLink>
            </div>
        </div>
    </div>
  )
}
