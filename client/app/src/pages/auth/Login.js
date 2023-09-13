import React from 'react'
import { useState } from 'react';
import Layout from '../../layout';
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate} from "react-router-dom"
import {useAuth,AuthProvider} from "../../context/auth"
import { token } from 'morgan';

const Login = () => {
  const [auth, setAuth ] = useAuth("")
  const [email, setemail]= useState("");
  const [password, SetPassword]= useState("");
  const navigate = useNavigate()

  const handelLogin = async (e)=>{
  e.preventDefault()
  try{
    //rn doing direct loal host
    const res = await axios.post('http://localhost:8080/api/v1/auth/login',{ email,password})
 //res.suxxess.data se api ka validation check hoga ahr api pe res.status lga rlha to wo aaega
  if(res.data.success){
    toast.success(res.data.message)
    setTimeout(2000)
    setAuth({
      ...auth, 
      user:res.data.user,
      token: res.data.token
    })
    //refresh krenge hat jaega so local storage me rkhna hai
localStorage.setItem("auth", JSON.stringify(res.data))
    navigate("/")

  }
  else{
    
    toast.error(res.data.message)
  }
  }
  catch(error){
    console.log(error)
  }
}




// to apply same css on the login i used className = register
return(
    <Layout> 
      
<div className='register'>
    <form onSubmit={handelLogin}>
      <div> 
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" 
      className="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp" 
      placeholder="Enter email" 
      
      required

      value={email}
      onChange= {(e)=> setemail(e.target.value)}
       
      
      />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" 
      className="form-control" 
      id="exampleInputPassword1" 
      placeholder="Password" 
      
      value={password}
      onChange= {(e)=> SetPassword(e.target.value)}
      required
      />
    </div>
    <div className="button">

    <button type='submit' class="btn mt-2 ml-2 btn-primary">Login</button>
</div>
</div>
  
  </form>
  <ToastContainer
position='top-right'
autoClose={1000}
/>
</div>
</Layout>
    )
} 
export default Login