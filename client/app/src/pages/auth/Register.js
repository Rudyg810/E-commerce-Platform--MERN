import React from 'react'
import { useState } from 'react';
import Layout from '../../layout';
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate} from "react-router-dom"

const Register = () => {
    const [name, setName]= useState("");
    const [email, setemail]= useState("");
    const [password, SetPassword]= useState("");
    const [phone, setPhone]= useState("");
    const [pin, setPin]= useState("");
    const navigate = useNavigate()

const handelSubmit = async(e) => {
  e.preventDefault()
  try{
    //rn doing direct loal host
    const res = await axios.post('http://localhost:8080/api/v1/auth/register',{name, email,password,phone,pin})
 //res.suxxess.data se api ka validation check hoga ahr api pe res.status lga rlha to wo aaega
  if(res.data.success){
    toast.success(res.data.message)
    setTimeout(2000)
    navigate("/login")

  }
  else{
    
    toast.error(res.data.message)
  }
  }
  catch(error){
    console.log(error)
  }
}

return(
  <div>
    <Layout> 
<div className='register'>
    <form className="form-container" onSubmit={handelSubmit}> 
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Name</label>
      
       <input type="name" className="form-control"
       id="exampleInputname" aria-describedby="emailHelp" 
       placeholder=" Name" required
       value={name} 
      onChange= {(e)=> setName(e.target.value)}
       />
    </div>
    
    
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email Id</label>
      
      <input required type="email" 
      className="form-control" 
      id="exampleInputEmail1" 
      aria-describedby="emailHelp"
      value={email}
      onChange= {(e)=> setemail(e.target.value)}
       placeholder=" Email" />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    

    <div className="form-group">
    
      <label htmlFor="exampleInputPassword1">Password</label>
      <input required  type="password" 
      className="form-control"
       id="exampleInputPassword1" 
       placeholder="Password"
       value={password}
    onChange= {(e)=> SetPassword(e.target.value)}
 />
    </div>

    <div className="form-group">
    

      <label htmlFor="exampleInputNumber">Phone</label>
      <input required 
       value={phone}
       onChange= {(e)=> setPhone(e.target.value)}
   
      type="number" className="form-control" id="exampleInputNumber" aria-describedby="emailHelp" placeholder=" Phone" />
    </div>

    <div className="form-group">
    
      <label htmlFor="exampleInputNumber">Pin</label>
      <input required type="number" 
      value={pin} 
      onChange= {(e)=> setPin(e.target.value)}
       
      className="form-control" 
      id="exampleInputNumber" 
      aria-describedby="emailHelp"
       placeholder=" Pin" />
    
    </div>

  <button type='submit' class="btn mt-2 btn-primary">Register</button>
  </form>

</div>
</Layout>


</div>
    );
}
export default Register 