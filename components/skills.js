import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 80, 1.1]
const trans = (x, y, s) => `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

function PageIntro() {
    const [first, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const [second, setSecond] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    const [fire, setFire] = useState(false);
    const [fire2, setFire2] = useState(false);

    function onChange(isVisible) {
        if (isVisible) {
            !fire && setFire(true);
        }
        console.log(fire);
    }

    return (
        <div className="skills">
            <div style={{ width: '90%', margin: 'auto' }}>
                <div className="skillsHeader">What I'm familiar with?</div>
                <div className="skillsContainer">
                    <VisibilitySensor onChange={onChange} partialVisibility={true} minTopValue={300}>
                        <div style={{ height: '500px' }}>
                            {
                                fire &&
                                <motion.div
                                    initial={{ x: 500, rotate: -10 }}
                                    animate={{ x: 0, rotate: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 120,
                                    }}
                                >
                                    <animated.div
                                        id="skillsImage1"
                                        className="card"
                                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                        style={{ transform: first.xys.interpolate(trans) }}
                                    >
                                        <img style={{ width: '100%' }} src={require("../images/main/skills.png")} alt="skills1" />
                                    </animated.div>
                                </motion.div>
                            }
                        </div>
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
