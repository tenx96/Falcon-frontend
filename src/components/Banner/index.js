import React from 'react'
import bannerImage from "assets/banner.svg"
import "./Banner.css"
export default function ImageButton() {
    return (
        <div>
            <img className="banner-image" src={bannerImage} alt="banner_image" />
            
            
        </div>
    )
}
