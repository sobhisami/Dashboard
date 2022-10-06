import React, { useState } from "react";

export const TaskContext=React.createContext({
  taskArray:[],
  settask:()=>{},
});

export const TaskContextHandle=(props)=>{
  let[taskArray,settask]=useState([]);
  return (
    <TaskContext.Provider value={{
      taskArray:taskArray,
      settask:settask,
    }}>
    {props.children}
    </TaskContext.Provider>
  ); 
}