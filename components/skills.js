import React from 'react';
import { useSpring, animated } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 80, 1.1]
const trans = (x, y, s) => `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function PageIntro() {
    const [first, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const [second, setSecond] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    function onChange(isVisible) {
        if (isVisible) {
            document.getElementById('skillsImage1').className = "card cardImage";
        }
        else {
            document.getElementById('skillsImage1').className = "card";
        }
    }

    function onChange2(isVisible) {
        if (isVisible) {
            document.getElementById('skillsImage2').className = "card cardImage2";
        }
        else {
            document.getElementById('skillsImage2').className = "card";
        }
    }

    return (
        <div className="skills">
            <div style={{ width: '90%', margin: 'auto' }}>
                <div className="skillsHeader">What I'm familiar with?</div>
                <div className="skillsContainer">
                    <VisibilitySensor onChange={onChange} partialVisibility={true}>
                        <div>
                            <animated.div
                                id="skillsImage1"
                                className="card"
                                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                style={{ transform: first.xys.interpolate(trans) }}
                            >
                                <img style={{ width: '100%' }} src={require("../images/main/skills.png")} alt="skills1" />
                            </animated.div>
                        </div>
                    </VisibilitySensor>
                    <VisibilitySensor onChange={onChange2} partialVisibility={true}>
                        <animated.div
                            id="skillsImage2"
                            className="card"
                            onMouseMove={({ clientX: x, clientY: y }) => setSecond({ xys: calc(x, y) })}
                            onMouseLeave={() => setSecond({ xys: [0, 0, 1] })}
                            style={{ transform: second.xys.interpolate(trans) }}
                        >
                            <img style={{ width: '100%' }} src={require("../images/main/skills2.png")} alt="skills1" />
                        </animated.div>
                    </VisibilitySensor>
                </div>
            </div>

            <style jsx>{`
                .skills{
                    overflow: hidden;
                    margin: 50px auto 0 auto;
                }
                .skillsHeader{
                    font-size:75px;
                    font-weight: bold;
                    color:#161748;
                    text-align: center;
                    margin-bottom: 60px;
                }
            `}</style>
        </div>
    )
}

export default PageIntro
