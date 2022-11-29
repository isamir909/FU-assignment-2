import React from 'react'
import { useState } from 'react'
import axios from "axios"


const Register=()=>{
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
    
  
    const createData=async()=>{
        axios.post("http://localhost:3000/register/user",{
            name:String(name),
            email:String(email),
            password:String(password),
            confirmPassword:String(password)
        }).then((res)=>{alert("user created ")})
          .catch((error)=>{alert(error.response.data.message);})
      }


    const handleSubmit=async(e)=>{
        e.preventDefault()
        e.stopPropagation()
        createData()
    }
   
    return (

        <div className='container border border-success rounded my-5 '>
          <h2 className='text-primary text-center py-5'>Register</h2>
            <form onSubmit={handleSubmit} className="container d-flex flex-column px-4 py-4 mx-3 my-3" >
            <label className=' mx-3 my-1 text-white'>Name</label>  
            <input  className=' mx-3 my-1' value={name} onChange={(e)=>setName(e.target.value)}  type="text" placeholder={"Enter Name"}></input> 

             <label  className=' mx-3 my-2 text-white'>Email</label>   
             <input  className=' mx-3 my-1' value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder={"Enter Email"}></input> 

             <label  className=' mx-3 my-2 text-white'>Password</label>   
             <input  className=' mx-3 my-1' value={password}   onChange={(e)=>setPassword(e.target.value)}type="password" placeholder={"Enter password"}></input> 

             <label  className=' mx-3 my-2 text-white'>Confirm Password</label>  
             <input  className=' mx-3 my-1' value={confirmPassword} typ  onChange={(e)=>setConfirmPassword(e.target.value)} type="password" placeholder="enter password again"></input>  

            <div className='py-4 px-3 mt-3 d-flex  border' style={{"width":"23%","height":"15%"}}>
            <img className='mx-3 mb-3' style={{"height":"30"}} alt=''  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
             <p class="btn-text text-white">
             <a className="nav-link active " aria-current="page" href="http://localhost:3000/google">Sign in with google</a>
            </p>
            </div>
          
            
             <button  className=' mt-4 my-1 btn btn-primary' >Submit</button>
            </form>

        </div>
    
    )
}
export default Register