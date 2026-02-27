import React, { useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
const Login = () => {
const [error,setError]=useState("");
// const [password,setPassword]=useState("");
const navigate = useNavigate();

const [show,setShow]=useState(false);
const handleLogin =async (e)=>{
    e.preventDefault();
      const form = e.target
    const email = form.email.value
    const password = form.password.value
    // console.log({email,password})
    try {
      const res = await fetch("https://task-api-eight-flax.vercel.app/api/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",

        },
        body:JSON.stringify({email,password}),
      } )
 const data = await res.json();

    if (!res.ok) {
      throw new Error("Invalid email or password");
    }

    // ✅ Save token in localStorage
    localStorage.setItem("token", data.token);
    toast.success("Login Successful");
    // ✅ Redirect to dashboard
    navigate("/dashboard/dashboard1");


    }catch(err){
      setError(err.message)
    }
}

    return (
        <div>
             <div>
            <div className='items-center justify-center flex   min-h-screen bg-orange-300'>
                <div className="card bg-orange-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold text-center">Login Your Account</h1>
        <form  onSubmit={handleLogin}>
          <fieldset className="fieldset">
          {/* email */}
          <label className="label">Email</label>
          <input name='email' 
          type="email" 
        //   ref={emailRef}
           
           className="input" placeholder="Email" required />
          {/* password */}
          <div className='relative'>
            <label className="label">Password</label>
          <input name='password' type={show ? 'text':'password'} className="input" placeholder="Password" required />
          <span onClick={()=>setShow(!show)} className='absolute right-7 top-8 cursor-pointer z-50'>{show ? <FaRegEye />:<FaEyeSlash />}</span>
          </div>
          {
            error && <p className='text-red-500 text-xs'>{error}</p>
          }  
          
            <button type='button' 
            // onClick={handleForgetPassword} 
            className=" text-left  link link-hover">Forgot password?</button>
            
          <button type='submit' className="btn btn-primary mt-4 text-white">Login</button>
          
        
        </fieldset>
        </form>
      </div>
    </div>
            </div>
        </div>
        </div>
    );
};

export default Login;