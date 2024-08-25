import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    if (!username || username === '') {
      navigate('/login');
    }
    let jwttoken='';
    fetch("http://localhost:5021/api/Auth/login",{headers:{
        
    }}).then((res)=>{
        return res.json();
    }).then((resp)=>{
        console.log(resp);
    }).catch((err)=>{
        console.log(err.message);
    });
  }, []);

  return null; // This component doesn't render anything
}

export default AuthRedirect;
