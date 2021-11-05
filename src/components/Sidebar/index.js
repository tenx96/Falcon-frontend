import React from 'react'
import Content from './Content'
import './style.css'

function openContent(event, id) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById('dashboard').style.display = "none";
    document.getElementById(id).style.display = "block";
    event.currentTarget.className += " active";
}

function Sidebar() {
    return (
        <>
            <div id='#sidebar'>
                <div class="flex-shrink-0 p-3 bg-white" style={{ width: '280px', height: 'calc(100vh - 64px)' }}>
                    <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom" style={{ paddingLeft: 'calc(24px - 1rem)' }}>
                        <span class="fs-5 fw-semibold">Falcon x Admin</span>
                    </a>
                    <ul class="list-unstyled ps-0">
                        <li class='mb-1 ms-2 tab'>
                        <button class="tablinks btn btn-no-toggle align-items-center rounded collapsed active" onClick={(e) => openContent(e, 'dashboard')}>
                            Dashboard
                        </button>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                data-bs-target="#home-collapse" aria-expanded="true">
                                Home
                            </button>
                            <div class="collapse show tab" id="home-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small nav-tabs" role="tablist">
                                    <li><button class="link-dark btn rounded btn-link tablinks" onClick={(e) => openContent(e, 'menu1')}>menu1</button></li>
                                    <li><button class="link-dark btn rounded btn-link tablinks" onClick={(e) => openContent(e, 'menu2')}>menu2</button></li>
                                    <li><button class="link-dark btn rounded btn-link tablinks">menu3</button></li>
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                data-bs-target="#dashboard-collapse" aria-expanded="false">
                                Lineup
                            </button>
                            <div class="collapse" id="dashboard-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                </ul>
                            </div>
                        </li>
                        <li class="mb-1">
                            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                data-bs-target="#orders-collapse" aria-expanded="false">
                                Tourism
                            </button>
                            <div class="collapse" id="orders-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                </ul>
                            </div>
                        </li>
                        <li class="border-top my-3"></li>
                        <li class="mb-1">
                            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                                data-bs-target="#account-collapse" aria-expanded="false">
                                Admin
                            </button>
                            <div class="collapse" id="account-collapse">
                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Content />
        </>
    )
}

export default Sidebar
