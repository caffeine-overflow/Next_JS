import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";
import Typist from 'react-typist';
import { CharacterReveal } from "react-text-reveal";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 80, 1.1]
const trans = (x, y, s) => `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function PageIntro() {
    const [first, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const [second, setSecond] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <div className="skills">
            <div style={{ width: '100%' }}>
                <div className="skillsHeader">What I'm familiar with?</div>
                <div className="skillsContainer">
                    <animated.div
                        className="card"
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: first.xys.interpolate(trans) }}
                    >
                        <img style={{ width: '100%' }} src={require("../images/main/skills.png")} alt="skills1" />
                    </animated.div>
                    <animated.div
                        className="card"
                        onMouseMove={({ clientX: x, clientY: y }) => setSecond({ xys: calc(x, y) })}
                        onMouseLeave={() => setSecond({ xys: [0, 0, 1] })}
                        style={{ transform: second.xys.interpolate(trans) }}
                    >
                        <img style={{ width: '100%' }} src={require("../images/main/skills2.png")} alt="skills1" />
                    </animated.div>
                </div>
            </div>

            <style jsx>{`
                .skills{
                    overflow: hidden;
                    height:2000px   ;
                    margin: 50px auto 0 auto;
                }
                .skillsHeader{
                    font-size:75px;
                    font-weight: bold;
                    color:#161748;
                    text-align: center;
                    margin-bottom: 60px;
                }
                .skillsContainer{
                  
                }
            `}</style>
        </div>
    )
}

export default PageIntro
