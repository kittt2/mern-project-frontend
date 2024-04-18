import { useState,useContext,useEffect,createContext } from "react";
import React from "react";
import axios from "axios";
const authcontext=createContext();


function Context({children}) {
    const [auth, setauth] = useState({
        user:null,
        token:"",
    });


   axios.defaults.headers.common['Authorization']=auth?.token;
    
    useEffect(() => {
      const data=localStorage.getItem('auth')
      if(data){
        const parsedata=JSON.parse(data)
        setauth({...auth,user:parsedata.user,token:parsedata.token})
      }
    
     
    }, [])
    


  return (
    <authcontext.Provider value={[auth,setauth]}>
        {children}
    </authcontext.Provider>
    
  )
}

const useauth=()=>useContext(authcontext)

export {useauth,Context}
