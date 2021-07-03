import React from 'react'
import './HomeTop.css'
function HomeTop() {

    return (
        <>
        <div className="homeTop">
            <div className="container" id="homeTop_title">
                <h1 className="brand" id="homeTop_brand">Artistly</h1>
                <p>3D Models, Tutorials and More...</p>
            </div>
            
            {/* scroll down animation classes */}
            
            <div class="mouse_scroll-1">
                <div class="mouse">
                    <div class="wheel"></div>
                </div>
                <div>
                    <span class="m_scroll_arrows unu"></span>
                    <span class="m_scroll_arrows doi"></span>
                    <span class="m_scroll_arrows trei"></span>
                </div>
            </div>

        </div>
        </>
    )
}

export default HomeTop
