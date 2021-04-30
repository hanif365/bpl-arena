import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faAlignLeft } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

const Header = () => {
    return (
        <div className="header" id="navbar-section">
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><FontAwesomeIcon icon={faAlignLeft} /> BPL ARENA</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav ms-auto">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Fixtures</a>
                                <a class="nav-link" href="#">Pricing</a>
                                <a class="nav-link" href="#">Blog</a>
                                <a class="nav-link" href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    );
};

export default Header;