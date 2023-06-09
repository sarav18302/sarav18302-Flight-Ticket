import React, { useContext, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';
export const NavBar = () => {
const {userInfo, setUserInfo} = useContext(UserContext);
  useEffect(()=>{
     fetch ('http://localhost:4000/user/profile',{

    // credentials:'include',
  }).then (response =>{
    response.json().then(
      userInfo=>{
        setUserInfo(userInfo);
      });
  }

  )}
  ,[]);

  function logout()
  {  
    fetch('http://localhost:4000/logout',
    {
      credentials:'include',
      method:'POST',     
    });
    setUserInfo(null);
    
  }
  // const username = userInfo?.username;
  var username;
  if(userInfo)
  {
     username = userInfo.username;
  }
  
  console.log(username);
  return (  
<nav className="navbar">
      <ul className="nav-list">

        <li className="nav-item">About</li>
        <li className="nav-item">Contact</li>
        {
    username && (
      <>
      
      <li className="nav-item"><a onClick ={logout} >Logout</a></li>
   </>
    )
  }
  {
    !username && (
      <>
      
      <li className="nav-item"><a onClick ={"/"} >Login</a></li>
   </>
    )
  }
    </ul>
    </nav>
  
 
  





  )
}