import React from 'react'

export const Home = () => {
  return (
    <div style={{width : "100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <div style={{width:"50vw",height:"70%",textAlign:"center",margin:"10% 0%"}}>
            <div style={{fontSize:"4.2rem",fontWeight:"bold"}}>Organize Your Work and Life with Ease</div>
            <div style={{fontSize:"1.3rem",color:"#25221e",opacity:"0.66",width:"70%",margin:"5% 15%",fontWeight:"400",letterSpacing:"0.06rem"}}>Your personal task manager to boost productivity and keep track of your daily goals</div>
            <button style={{backgroundColor : "#E34432",border:"1px solid #E34432",color:"white",padding:"2vh 1.5vw",fontSize:"1.4rem",fontWeight:"600",borderRadius:"10px",cursor:"pointer"}}>Get Started</button>
        </div>
    </div>
  )
}
