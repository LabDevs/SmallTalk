import React, { useState } from 'react';

function LoginForm(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  async function handleSubmit(e){
    e.preventDefault()
    console.log(username,password)
    
    const response = await requestMethod('POST','/login',{
      "username":"username",
      "password":"password"
    })
    console.log(response)
  }
  return (
    <div>
      <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        
        <label htmlFor="password">Password</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        <input type="submit" value="submit" onClick={handleSubmit} />
      </form>
    </div>
    )
}

const requestMethod = (method, url, data) => fetch(url, {
  method,
  body: JSON.stringify(data),
  headers: data ? { 'content-type': 'application/json' } : {},
}).then((response) => {
  if (response.status >= 400) {
    return response.json().catch((errResData) => {
      const error = new Error('Something went wrong!');
      error.data = errResData;
      throw error;
    });
  }
  return response;
});

export default LoginForm