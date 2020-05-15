import React, { useState } from 'react';

function LoginForm(){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  function handleSubmit(e){
    e.preventDefault()
    console.log(username,password)
  }
  
  return (
    <div>
      <form className="login" onSumbit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" value={username} />
        
        <label htmlFor="password">Password</label>
        <input type="text" value={password} />
        
        <input type="sumbit" value="sumbit" onClick={handleSubmit}>
      </form>
    </div>
    )
}

export default LoginForm