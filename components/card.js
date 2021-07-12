import React, { useState, useEffect } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import SimpleImageSlider from "react-simple-image-slider";

function Card(props) {
    const [fire, setFire] = useState(false);

    async function onChange(isVisible) {
        if (isVisible) {
            !fire && setFire(true);
        }
    }

    return (
        <VisibilitySensor onChange={onChange} partialVisibility={true} minTopValue={350}>
            <div style={{ minHeight: '500px', width: '100%' }}>
                {
                    fire &&
                    <motion.div
                        initial={{ x: props.animationDirection === 'right' ? 500 : -500 }}
                        animate={{ x: 0 }}
                        transition={{
                            type: 'spring',
                            stiffness: 250,
                        }}
                    >
                        <div className='container'>
                            <div style={{ width: '60%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <div>
                                    <SimpleImageSlider
                                        width={600}
                                        height={500}
                                        images={props.info.images}
                                        showBullets={true}
                                        showNavs={true}
                                    />
                                </div>
                            </div>
                            <div style={{ flex: 1, padding: '40px', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: '40px', fontWeight: 'bold', opacity: '0.8', marginBottom: '20px' }}>
                                    {props.info.name}
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {
                                        props.info.stack.map((s, i) =>
                                            <h4
                                                key={i}
                                                style={{
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
                                <div style={{ opacity: '0.7', marginTop: '30px' }}>
                                    {props.info.desc}
                                </div>
                                <div
                                    style={{
                                        color: '#f5f5f5', margin: 'auto 0 0 auto', height: '50px',
                                        width: '200px', background: '#161748', borderRadius: '15px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '18px'
                                    }}
                                >
                                    Check it out
                                </div>
                            </div>

                            <style jsx>{`
                            .container{
                                width: 80%;
                                height: 600px;
                                background: white;
                                margin: 20px auto;
                                border-radius: 10px;
                                display: flex;
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
        </VisibilitySensor>
    )
}

export default Card
