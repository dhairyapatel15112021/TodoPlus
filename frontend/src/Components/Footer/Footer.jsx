import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {
  return (
    <div style={{backgroundColor:"#FEEFE5",padding:'3vh 2vw'}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div style={{fontSize:'1.3rem',fontWeight:'bold'}}>TaskTrack</div>
            <div><span>&#169;</span>2024 TaskTrack | All Rights Reserved</div>
            <div style={{display : "flex" ,alignItems:"center", justifyContent : "space-between",width:"10vw",fontSize:'1.5rem',fontWeight:'500'}}>
                <NavLink><i class="fa-brands fa-instagram" style={{color:"black"}}></i></NavLink>
                <NavLink><i class="fa-brands fa-youtube" style={{color:"black"}}></i></NavLink>
                <NavLink><i class="fa-brands fa-x-twitter" style={{color:"black"}}></i></NavLink>
            </div>
        </div>
    </div>
  )
}
