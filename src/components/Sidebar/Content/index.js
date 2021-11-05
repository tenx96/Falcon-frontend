import React from 'react'
import './style.css'

function Content() {
    return (
        <div id='content'>
            <div id="dashboard" class="tabcontent" style={{display:'block'}}>
                <h1>Dashboard</h1>
            </div>
            <div id="menu1" class="tabcontent">
                <h1>menu1</h1>
            </div>

            <div id="menu2" class="tabcontent">
                <h1>menu2</h1>
            </div>
        </div>
    )
}

export default Content
