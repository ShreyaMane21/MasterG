import React, { useState } from 'react';
import { useNavigate, Link  } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //handle backend logic

  }


  return (
  <div>Login</div>
  )
};

export default Login;
