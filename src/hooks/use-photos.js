import { useState,useEffect,useContext } from "react";
import userContext from '../context/user'
import { getUserByUserId,getPhotos } from "../services/firebase";

export default function usePhotos(){
    const[photos,setPhotos]=useState(null)
    const { user:{uid:userId=''}}=useContext(userContext)
    useEffect(()=>{
        async function getTimelinePhotos(){
            const {following}= await getUserByUserId(userId)
            let followedUserPhotos=[]
            if(following.length > 0){
                followedUserPhotos= await getPhotos(userId,following)
            }
        }
        console.log(userId)
    },[])
    return {photos}
}