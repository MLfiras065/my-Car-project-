import React, { useState } from "react";

const Rejester = () => {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validateForm = ({name,email,password}) => {
    if(name!==0||password!==0||email!==0)
    
   {alert('email is wrong')}
   else{
    setName(name)===name
   setEmail(email)===email
   setPassword(password)===password
   }
  };
  return (
    <div className="signup">
      <h1>Signup</h1>
      <div className="form" >
        <input className="form"
          placeholder="name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <input className="form"
          placeholder="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input className="form"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button  type="text" disabled={!validateForm}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Rejester;
