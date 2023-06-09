import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';


export const RegisterPage = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const navigate = useNavigate();
  async function register(ev)
  {
    ev.preventDefault();

    const response=  await fetch('http://localhost:4000/user/register',{
      method:'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},

    });
    console.log(response);

    if(response.status!==200)
  {

    alert("Registrartion failed");
  }
  else{
    navigate("/user/login");
  }



  }
  return (
    <div className='form-content'>
          <div className='container'>
           
        <div className='form-container'>
        <h1 className='h-form'>Register</h1>
        <form className='register'
          onSubmit={register}>
        <input type="text"
              placeholder="username"
              value={username}
              onChange={ev => setUsername(ev.target.value)}

                />
        <input type="password"
                placeholder='password'
                value={password}
              onChange={ev => setPassword(ev.target.value)}
                />

        <button>Register</button>
        
        <Link to ={"/user/login"}>Login with existing account?</Link> 
       
        
    </form>
    
    
    </div>
    
    </div>
    </div>
    
    
  )
}
