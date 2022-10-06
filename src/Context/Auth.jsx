import React from "react";
import { useState } from "react";

export const Auth=React.createContext({
  loginin:false,
  Updatelogin:(status)=>{},
  token:"",
});

export const AuthHandle=(props)=>{
let[loginin,setlogin]=useState(JSON.parse(localStorage.getItem('login-in')));
let Updatelogin=(status)=>{
setlogin(status)
localStorage.setItem("login-in",status)
}
return(
<Auth.Provider value={{
  loginin:loginin,
  Updatelogin:Updatelogin,
  token:"",
}}>
{props.children}
</Auth.Provider>
);
}