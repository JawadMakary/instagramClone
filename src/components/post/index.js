import {useRef} from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
const Post = ({content}) => {
   
   
    return (
        <div className='p-4'>
         <Header username={content.username} />
        </div>
    )
}

export default Post
Post.propTypes = {
    content: PropTypes.shape({
      username: PropTypes.string.isRequired,
      imageSrc: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      docId: PropTypes.string.isRequired,
      userLikedPhoto: PropTypes.bool.isRequired,
      likes: PropTypes.array.isRequired,
      comments: PropTypes.array.isRequired,
      dateCreated: PropTypes.number.isRequired
    })
  };