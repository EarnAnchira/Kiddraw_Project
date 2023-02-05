import React from "react";

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand" href="!#"> 
                    <img src="assest\navbarImg\logo_white.png" width="60" height="60" class="d-inline-block align-top" alt=""></img>
                </a>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="search" aria-label="search" style={{ borderRadius: "25px"}}></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">search</button>
                    </form>

                    <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="!#"> HOME </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="!#"> STORIES </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="!#"> PORTFOLIO </a>
                        </li>
                    </ul>

                    <img src="assest\navbarImg\User-avatar-whiteBg.png" alt="" roundedCircle={true} style={{ borderRadius: "50%", height: "35px", width: "35px", margin: "0px 10px"}}></img>
                </div>
            </nav>
        </div>
    );
}