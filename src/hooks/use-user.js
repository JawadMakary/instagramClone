import { useState,useEffect,useContext } from "react";
import userContext from "../context/user";
import { getUserByUserId } from "../services/firebase";
export default function useUser(){
    const[activeUser,setActiveUser]=useState('')
    const {user}=useContext(userContext)
    useEffect(()=>{
        async function getUserObjectByUserId(){
            // fct that get user data based on id
            const [response] = await getUserByUserId(user.uid)
            setActiveUser(response)
        }
        if(user?.uid){
            getUserObjectByUserId()
        }
    },[user])
    return {user:activeUser}
}