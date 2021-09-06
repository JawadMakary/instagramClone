import React,{useState} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const SuggestedProfile = ({userDocId,username,profileId,userId}) => {
    const[followed,setFollowed]=useState(false)
    SuggestedProfile.propTypes={
      userDocId:PropTypes.string.isRequired, 
      username:PropTypes.string.isRequired,  
      profileId:PropTypes.string.isRequired,  
      userId:PropTypes.string.isRequired,   
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
                <button className='text-xs font-bold text-blue-medium' type='button' onClick={()=>console.log('user follow btn clicked')}>Follow</button>
            </div>
           
        </div>
    ):(
      null
    )
}

export default SuggestedProfile
