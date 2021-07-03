import React from 'react'
import HomeTop from './HomeTop.js'
import HomeVideos from './HomeVideos.js'
import HomeModels from './HomeModels.js'
import HomeAbout from './HomeAbout.js'

function Home() {
    return (
        <>
        {/* Home main page */}
        <HomeTop/>

        {/* Home Video Page */}
        <HomeVideos/>
        
        {/* Home Model Page */}
        <HomeModels/>
        
        {/* Home About Page */}
        <HomeAbout/>
        
        </>
    )
}

export default Home
