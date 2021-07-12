import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
function footer() {
    return (
        <div>
            <div>
                <section className="footer">
                    <div className="rounded-social-buttons">
                        <a className="social-button facebook" href="https://github.com/caffeine-overflow" target="_blank">
                            <FontAwesomeIcon style={{ width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', margin: 'auto' }} icon={faGithub} />
                        </a>
                        <a className="social-button linkedin" href="https://www.linkedin.com/in/danishdavis/" target="_blank">
                            <FontAwesomeIcon style={{ width: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', margin: 'auto' }} icon={faLinkedinIn} />
                        </a>
                        <a className="social-button instagram" href="https://www.instagram.com/danlovespopcorn/" target="_blank">
                            <FontAwesomeIcon style={{ width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', margin: 'auto' }} icon={faInstagram} />
                        </a>
                        <a className="social-button facebook" href="https://www.facebook.com/Popcorn1995/" target="_blank">
                            <FontAwesomeIcon style={{ width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', margin: 'auto' }} icon={faFacebook} />
                        </a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontSize: '20px' }}>
                        Made with
                        <FontAwesomeIcon style={{ width: '25px', color: 'red', marginLeft: '10px' }} icon={faHeart} />
                    </div>
                </section>
            </div>
            <style jsx>{`

                .footer {
                    height: 150px;
                }
                .rounded-social-buttons {
                    text-align: center;
                }

                .rounded-social-buttons .social-button {
                    display: inline-block;
                    position: relative;
                    cursor: pointer;
                    width: 3.125rem;
                    height: 3.125rem;
                    border: 0.125rem solid transparent;
                    padding: 0;
                    text-decoration: none;
                    text-align: center;
                    color: #fefefe;
                    font-size: 1.5625rem;
                    font-weight: normal;
                    line-height: 2em;
                    border-radius: 1.6875rem;
                    transition: all 0.5s ease;
                    margin-right: 2rem;
                    margin-bottom: 1rem;
                }

                .rounded-social-buttons .social-button:hover, .rounded-social-buttons .social-button:focus {
                    -webkit-transform: rotate(360deg);
                        -ms-transform: rotate(360deg);
                            transform: rotate(360deg);
                }

                .rounded-social-buttons .fa-twitter, .fa-facebook-f, .fa-linkedin, .fa-youtube, .fa-instagram {
                    font-size: 25px;
                }

                .rounded-social-buttons .social-button.facebook {
                    background: #43436b;
                }

                .rounded-social-buttons .social-button.facebook:hover, .rounded-social-buttons .social-button.facebook:focus {
                    color: #3b5998;
                    background: #fefefe;
                    border-color: #3b5998;
                }

                .rounded-social-buttons .social-button.twitter {
                    background: #55acee;
                }

                .rounded-social-buttons .social-button.twitter:hover, .rounded-social-buttons .social-button.twitter:focus {
                    color: #55acee;
                    background: #fefefe;
                    border-color: #55acee;
                }

                .rounded-social-buttons .social-button.linkedin {
                    background: #007bb5;
                }

                .rounded-social-buttons .social-button.linkedin:hover, .rounded-social-buttons .social-button.linkedin:focus {
                    color: #007bb5;
                    background: #fefefe;
                    border-color: #007bb5;
                }

                .rounded-social-buttons .social-button.youtube {
                    background: #bb0000;
                }

                .rounded-social-buttons .social-button.youtube:hover, .rounded-social-buttons .social-button.youtube:focus {
                    color: #bb0000;
                    background: #fefefe;
                    border-color: #bb0000;
                }

                .rounded-social-buttons .social-button.instagram {
                    background: #125688;
                }

                .rounded-social-buttons .social-button.instagram:hover, .rounded-social-buttons .social-button.instagram:focus {
                    color: #125688;
                    background: #fefefe;
                    border-color: #125688;
                }
            `}</style>
        </div>
    )
}

export default footer
