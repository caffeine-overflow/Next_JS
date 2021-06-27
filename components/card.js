import React, { useState, useEffect } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import Background from "../images/main/waves.svg";

function Card(props) {
    const [fire, setFire] = useState(false);

    async function onChange(isVisible) {
        if (isVisible) {
            !fire && setFire(true);
        }
    }

    return (
        <VisibilitySensor onChange={onChange} partialVisibility={true} minTopValue={250}>
            <div style={{ minHeight: '500px', width: '100%' }}>
                {
                    fire &&
                    <motion.div
                        initial={{ x: props.animationDirection === 'right' ? 500 : -500 }}
                        animate={{ x: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 50,
                        }}
                    >
                        <div className='container' style={{ backgroundImage: "url(" + Background + ")" }}>
                            <img className='image' src={require("../images/main/temp.png")} alt="skills1" />
                            <div style={{ display: 'flex', color: '#161748' }}>
                                <div style={{ width: '60%', margin: '0 10px 20px 30px' }}>
                                    <div style={{ fontSize: '40px', fontWeight: 'bold', opacity: '0.8' }}>
                                        {props.info.name}
                                    </div>
                                    <div style={{ opacity: '0.7' }}>
                                        {props.info.desc}
                                    </div>
                                </div>
                                <div style={{ margin: 'auto', display: 'flex', flexWrap: 'wrap' }}>
                                    {
                                        props.info.stack.map(s =>
                                            <h4 style={{
                                                margin: 5,
                                                padding: '5px 15px',
                                                background: '#3F3D56',
                                                color: '#f5f5f5',
                                                fontWeight: 200,
                                                borderRadius: 5
                                            }}>
                                                {s}
                                            </h4>
                                        )
                                    }
                                </div>
                            </div>

                            <style jsx>{`
                            .container{
                                width: 70%;
                                background: white;
                                margin: 20px auto;
                                border-radius: 10px;
                            }

                            .image{
                                border-radius: 10px;
                                max-height: 400px;
                                margin: 0 10px;
                            }
                        `}
                            </style>
                        </div>
                    </motion.div>
                }
            </div>
        </VisibilitySensor >
    )
}

export default Card
