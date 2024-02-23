import React from 'react'
import AdminDashboard from './AdminDashboard';

function Login() {
    const username = prompt("Enter your username:");
    const password = prompt("Enter your password:");

    const handleLogin = () =>{
        if (username === "admin" && password === "12345"){
            return true;
        }
        return false;
    };
  return (
    <>
        {handleLogin() ? <AdminDashboard/> : null};
    </>
  )
}

export default Login