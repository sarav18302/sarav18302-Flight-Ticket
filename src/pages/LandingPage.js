import React from 'react';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div>
        <button className = "landpage-container"><Link to ="/admin/login">Admin</Link></button>
        <button><Link to = "/user/register">User</Link></button>
    </div>
  )
}
