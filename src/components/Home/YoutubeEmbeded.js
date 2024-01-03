import React from 'react'
import PropTypes from 'prop-types'
import './YoutubeEmbeded.css'

function YoutubeEmbeded({embedId}) {
    return (
        <div className='container'>
        {
            embedId.map((id) =>
            <iframe className="embed-responsive-item" id="iframe_style"
                src={`https://www.youtube.com/embed/${id.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={id.videoTitle}
            /> 
            )
        }
        </div>
    )
}

YoutubeEmbeded.propTypes = {
    embedId: PropTypes.string.isRequired
   };
  

export default YoutubeEmbeded
