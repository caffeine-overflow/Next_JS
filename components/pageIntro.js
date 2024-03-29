import React, { useState, useEffect } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import Typist from 'react-typist';
import { Reveal } from "react-text-reveal";
import Background from "../images/main/waves.svg";

function PageIntro() {

    const [fire, setFire] = useState(false);
    const [typist, setTypist] = useState(false);

    function onChange(isVisible) {
        if (isVisible) {
            !typist && setTypist(true);
            !fire && setFire(true);
        }
    }

    return (
        <div className="container" style={{ backgroundImage: "url(" + Background + ")" }}>
            <VisibilitySensor onChange={onChange}>
                <div className="textContainer">
                    {
                        typist &&
                        <Typist>
                            <span className="header">whoami</span>
                        </Typist>
                    }
                    <div className="desc">
                        <Reveal
                            canPlay={fire}
                            ease={"cubic-bezier(0,0.4,0.4,1)"}
                            duration={8000}
                        >
                            I'm a Full Stack Developer offering a strong foundation in software engineering and programming principles across multiple platforms.
                            Experienced in object-oriented programming; developing, testing & debugging code; designing interfaces; and managing database systems. Constant student of emerging development techniques and promising frameworks.                        </Reveal>
                    </div>
                </div>
            </VisibilitySensor>

            <style jsx>{`
                .container{
                    overflow: auto;
                    height:910px;
                    color: #161748;
                    margin-top:-100px;
                }
                .textContainer{
                    width:40%;
                    margin:18% 5% 0 10%;
                }
                .header{
                    font-size:100px;
                    font-weight: bold;
                }
                .desc{
                    font-size:25px;
                }
            `}</style>
        </div>
    )
}

export default PageIntro
