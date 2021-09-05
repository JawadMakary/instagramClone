import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton'
const Suggestions = () => {
    const[profiles,setProfiles]=useState(null)
    Suggestions.propTypes={
        userId:PropTypes.string
    }
    // get suggested profiles



    useEffect(()=>{

    },[])
    return (
        !profiles ?(
            <Skeleton count={1} height={150} className='mt-5' />
        ): profiles.length>0 ? (
            <div className="rounded flex flex-col">
                <div className="text-sm flex items-center justify-between mb-2">
                <p className='font-bold text-gray-base'>
                    Suggestions for you
                </p>
                </div>
            </div>
        ) : null
    )
}

export default Suggestions
