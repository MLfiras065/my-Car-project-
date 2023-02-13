import React, { useState } from "react";

function LogInUser(props) {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  return (
    <div>
      <div className="login">
        <h1>Email</h1>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        ></input>
        <h2>Password</h2>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        ></input>
        
        <button
          type="button"
          onClick={() => {
            console.log("login:",props.items);
            props.items.filter((el) => {
              if (el.email===email&&el.password===password) {
                     props.setView('List')
                     props.items(el)
              } else if (el.email===email&&el.password!=password) {
                
                alert("wrong password or user doesn't exist");
              }
            });
          }}
        >
          Login  &#10004;
        </button>
      </div>
    </div>
  );
}

export default LogInUser;
