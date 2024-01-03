import React from 'react'
import './Footer.css'

function Footer() {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div className="footer">
           &#169; Artistly {year} 
        </div>
    )
}

export default Footer
