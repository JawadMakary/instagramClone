import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {updateLoggedInUserFollowing,updateFollowedUserFollowers} from '../../services/firebase'
const SuggestedProfile = ({spDocId,username,profileId,userId,loggedInUserDocId}) => {
    const[followed,setFollowed]=useState(false)
    async function handleFollowUser(){
        setFollowed(true)
        // update following array of logged in user
        await updateLoggedInUserFollowing(loggedInUserDocId,profileId,false);
        // update followers array of the user who has been followed
       await updateFollowedUserFollowers(spDocId,userId,false)

    }
    SuggestedProfile.propTypes={
        spDocId:PropTypes.string.isRequired, 
      username:PropTypes.string.isRequired,  
      profileId:PropTypes.string.isRequired,  
      userId:PropTypes.string.isRequired, 
      loggedInUserDocId:PropTypes.string.isRequired,
    }

    return !followed ?(
        <div className='flex items-center justify-between'>
            <div className="flex items-center justify-between">
                <img className='rounded-full w-8 flex mr-3' src={`/images/avatars/${username}.jpg`} alt="" />
                <Link to={`/p/${username}`}>
                    <p className='font-bold text-sm'>{username}</p>
                </Link>
            </div>
            <div className="">
                <button className='text-xs font-bold text-blue-medium' type='button' onClick={handleFollowUser}>Follow</button>
            </div>
           
        </div>
    ):(
      null
    )
}

export default SuggestedProfile
