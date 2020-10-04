import React, { useState, useEffect } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import Typist from 'react-typist';
import { CharacterReveal } from "react-text-reveal";
import Background from "../images/main/waves.png";

function PageIntro() {

    const [fire, setFire] = useState(false);
    const [typist, setTypist] = useState(false);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    async function onChange(isVisible) {
        if (isVisible) {
            !typist && setTypist(true);
            await delay(1000);
            !fire && setFire(true);
        }
    }

    return (

        <div className="container" style={{ backgroundImage: "url(" + Background + ")" }}>\
            <VisibilitySensor onChange={onChange}>
                <div className="textContainer">
                    {
                        typist &&
                        <Typist>
                            <span className="header">whoami</span>
                        </Typist>
                    }
                    <div className="desc">
                        <CharacterReveal
                            animateOpacity
                            canPlay={fire}
                            characterOffsetDelay={15}
                            characterWordSpacing={'.25em'}
                            copy={[
                                'I\'m a Computer programmer offering a strong foundation in software engineering and programming principles. Experience in object-oriented programming; developing, testing and debugging code; designing interfaces; and managing database systems. Bringing strong work ethic and excellent organizational skills to any setting. Excited to begin a new challenge with a successful team.'
                            ]}
                            duration={1500}
                            ease={
                                'cubic-bezier(0.5848375451263538,-0.003374999999999906,0.16606498194945848,1.012625)'
                            }

                        />
                    </div>
                </div>
            </VisibilitySensor>

            <style jsx>{`
                .container{
                    height:910px;
                    color: #161748;
                }
                .textContainer{
                    width:40%;
                    margin:3% 5% 0 10%;
                }
                .header{
                    font-size:120px;
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
