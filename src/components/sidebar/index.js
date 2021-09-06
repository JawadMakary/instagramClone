import React,{useState} from 'react'
import useUser from '../../hooks/use-user'
import User from './User'
import Suggestions from './Suggestions'
const Sidebar = () => {
   const {user:{fullName,username,userId,following}}=useUser()
//    const[test,setTest]=useState(0)
    return (
        <div className='p-4'>
            {/* <button onClick={()=>setTest(1)}>click me</button> */}
           <User username={username} fullName={fullName} />
           <Suggestions userId={userId} following={following} />
        </div>
    )
}

export default Sidebar
// Sidebar.whyDidYouRender=true;