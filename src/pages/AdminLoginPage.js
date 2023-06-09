import React, { useState, useContext } from 'react'
import { useNavigate} from 'react-router-dom';
import { UserContext } from '../UserContext';


export const AdminLoginPage = () => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [redirect,setRedirect] =useState(false);
  const {setUserInfo} = useContext(UserContext);
  const navigate = useNavigate();
  async function adminlogin(ev)
  {
    ev.preventDefault();

    const response = await fetch('http://localhost:4000/admin/login',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers:{'Content-Type':'application/json'},
      credentials: 'include',


    });
    // console.log(response);
    if(response.ok)
    {
      console.log("abc");
      response.json().then(userInfo =>{
        console.log(userInfo);
        setUserInfo(userInfo);
        console.log()
        
        setRedirect(true);
      });

    }
    else
    {
      alert("login failed");
    }

    if(redirect)
    {
      // <Navigate to="/profile" replace={true} />
     
      navigate('/admin/info');



    }



  }
  return (
     
       <div className='form-content'>
    <div className='container'>
     
  <div className='form-container'>
  <h1 className='h-form'>Admin Login</h1>
  <form className='register'
          onSubmit={adminlogin}>
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
        <button>Login</button>
    </form>
  </div>
  </div>
  </div>
     
    
    
  )
}
