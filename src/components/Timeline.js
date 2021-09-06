import React from 'react'
import Skeleton from 'react-loading-skeleton'
import usePhotos from '../hooks/use-photos'
const Timeline = () => {
    const {photos}=usePhotos()
    
    return (
        <div className='container col-span-2'>
            timeline
        </div>
    )
}

export default Timeline
