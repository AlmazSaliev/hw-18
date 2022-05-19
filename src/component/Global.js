import React from "react";

export const Global=React.createContext({
  
    get:()=>JSON.parse(localStorage.getItem('data')) || []
})