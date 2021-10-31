import React from 'react'
import './style.css'

function Artists() {
    const Artistlist = [
        {
            name: "Muse: The Singless",
            image: "https://upload.wikimedia.org/wikipedia/en/3/35/Muse_2nd_law.jpg",
            desc: "Listen to Muses's singles now, including Supermassive black hole"
        },
        {
            name: "Billie Eilish",
            image: "https://media.pitchfork.com/photos/608839f84c67840074db8afb/1:1/w_600/Billie-Eilish-Happier-Than-Ever.jpeg",
            desc: "Artist"
        },
        {
            name: "Still on My Mind",
            image: "https://media.pitchfork.com/photos/5c7d593e3a5a154e7b62f576/1:1/w_600/Dido_StillOnMyMind.jpg",
            desc: "Dido"
        }
    ]
    return (
        <div className='container-fluid px-0 artist'>
            <div className="row p-5">
                {Artistlist.map((artist, index) => (
                    <div className="col-md-4" key={index}>
                        <div class="card">
                            <div class="cover">
                                <img src={artist.image} alt="cover" />
                            </div>
                            <div class="card-content">
                                <h4>{artist.name}</h4>
                                <p>{artist.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Artists
