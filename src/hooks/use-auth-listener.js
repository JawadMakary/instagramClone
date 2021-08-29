import { useState,useEffect,useContext } from "react";
import FirebaseContext from "../context/firebase";
export default function useAuthListener(){
    const[user,setUser]=useState(JSON.parse(localStorage.getItem('authUser')))
    const {firebase}=useContext(FirebaseContext)
    useEffect(()=>{
        const listener=firebase.auth().onAuthStateChanged((authUser)=>{
            // we have user-> store user local storage
            if(authUser){
                localStorage.setItem('authUser',JSON.stringify(authUser))
                setUser(authUser)
            }else{
                // !authUseruser->clear the storage
                localStorage.removeItem('authUser')
                setUser(null)
            }
        })
        // clean up our listener
        return()=>listener()
    },[firebase])
    
    
    return {user}
}
