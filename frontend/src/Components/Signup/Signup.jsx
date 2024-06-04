import React, { useState } from 'react';
import axios from 'axios';

export const Signup = () => {
    const [formData, setFormData] = useState({});

    function setValues(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const submitForm = async () => {
        try{
            const response = await axios.post("http://localhost:5040/signup",formData);
            console.log(response);
            if (response.data.msg){
                alert("Succesfully Sign Up");
            }
            else{
                alert("Something Went Wrong! " + response.data.error);
            }
        }
        catch(err){
            alert("Problem With Singup Frontend " + err);
        }
    }
    return (
        <div>
            <form style={{ display: 'flex', flexDirection: 'column', width: '30%', justifyContent: 'center', alignItems: 'center', height: '70vh', marginLeft: '35%' }}>
                <div style={{fontSize : "2vmax",fontWeight : "500"}}>Sign Up</div>
                <input type="text" name="username" placeholder='Username' style={{ padding: '1%', margin: '1%', marginTop: '5%', width: '12vw', fontSize: '1.1vmax' }} onChange={(e) => setValues(e)} />
                <input type="password" name="password" placeholder='Password' style={{ padding: '1%', margin: '1%', marginTop: '3%', width: '12vw', fontSize: '1.1vmax' }} onChange={(e) => setValues(e)} />
                <div style={{ margin: '1% 6%', textAlign: 'center', marginTop: '3%', fontSize: '1.2vmax' }}>* All Fields are Mandatory</div>
                <button type="button" style={{ padding: '1% 3%', margin: '1%', marginTop: '3%', fontSize: '1.2vmax' }} onClick={submitForm}>Submit</button>
            </form>
        </div>
    )
}
