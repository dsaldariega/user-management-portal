import React from 'react'

function Register(props: any) {
  const { fullName, username, email, password } = props.user
  
  return (
    <div>
      <div>Register</div>
      <div>
        <input type='text' 
        placeholder='Full Name' 
        onChange={()=> {}}
        value={fullName}/>
        <input type='text' 
        placeholder='Username' 
        onChange={()=> {}}
        value={username}/>
        <input type='text' 
        placeholder='Email' 
        onChange={()=> {}}
        value={email}/>
        <input type='password' 
        placeholder='Password' 
        onChange={()=> {}}
        value={password}/></div>
        <button>Register</button>
    </div>
  )
}

export default Register