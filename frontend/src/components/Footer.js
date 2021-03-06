import React from 'react';

import "./Footer.css";

import FacebookIcon from '../assets/icons/facebook-app-logo.png';
import InstagramIcon from '../assets/icons/instagram-logo.png';
import TwitterIcon from '../assets/icons/twitter-logo.png';

import { Link } from 'react-router-dom';
import { linkPrefix } from '../options.json';


export default function Footer() {
    return (
        <div className="container-fluid align-items-center pt-5 py-3 bg-light"> 
            <div className="footerText row justify-content-center text-center mt-1">
                <div className="col-12">
                    Todos os direitos reservados - exemplio 2019.
                </div>
            </div>
            <div className="footerText row justify-content-center text-center mb-1">
                <div className="col-12">
                    <Link to={`${linkPrefix}/termos-e-condicoes`}>
                        Termos de uso e política de privacidade
                    </Link>
                </div>
            </div>
            <div className="row justify-content-center mt-3">
                <a href="https://www.facebook.com/exemplioBR" target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid mx-2 footer-social-icon" src={ FacebookIcon } alt="Facebook Icon" />
                </a>
                <a href="https://www.instagram.com/exemplio/" target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid mx-2 footer-social-icon" src={ InstagramIcon } alt="Instagram Icon" />
                </a>
                <a href="https://twitter.com/exemplioBR" target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid mx-2 footer-social-icon" src={ TwitterIcon } alt="Twitter Icon" />
                </a>
            </div>
            <div className="row justify-content-center mt-3">
                <p className="small"> Icons made by Freepik from [ww.flaticon.com] </p>
            </div>
        </div>
    );
}