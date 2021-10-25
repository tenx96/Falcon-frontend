import React from 'react'
import "./Navbar.css"

function Navbar({ title, routes }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark">
            <div className="container-fluid px-0" style={{overflowX:'hidden'}}>
                <a className="navbar-brand" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {routes.map((item , index) => (
                            <li key={index} className="nav-item">
                                <a className="nav-link active" aria-current="page" href={item.route}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
