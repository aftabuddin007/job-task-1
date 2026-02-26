import React, { useState } from 'react';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router';
const Login = () => {


const [show,setShow]=useState(false);
const handleLogin =(e)=>{
    e.preventDefault();
}

    return (
        <div>
             <div>
            <div className='items-center justify-center flex   min-h-screen bg-green-300'>
                <div className="card bg-green-100 w-full max-w-sm shrink-0 shadow-2xl">
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
          {/* {
            error && <p className='text-red-500 text-xs'>{error}</p>
          }  
           */}
            <button type='button' 
            // onClick={handleForgetPassword} 
            className=" text-left  link link-hover">Forgot password?</button>
            
          <button type='submit' className="btn btn-success mt-4 text-white">Login</button>
          <p className='text-center font-bold text-md'>Or</p>
          <div className='text-center  '>
            {/* Google */}

          </div>
          {/* <p className='text-center mt-4 font-semibold '>Don't Have an account? <Link to='/auth/signup' className='text-red-600'>SignUp</Link></p> */}
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