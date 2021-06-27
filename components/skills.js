import React, { useState, useEffect } from 'react';
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

const skills = [
    {
        'name': 'React',
        'image': require('../images/main/react.png')
    },
    {
        'name': 'Node JS',
        'image': require('../images/main/node.png')
    },
    {
        'name': 'Laravel',
        'image': require('../images/main/laravel.png')
    },
    {
        'name': 'PSQL',
        'image': require('../images/main/psql.png')
    },
    {
        'name': 'MySQL',
        'image': require('../images/main/mysql.png')
    },
    {
        'name': 'MongoDB',
        'image': require('../images/main/mongodb.png')
    },
    {
        'name': 'Next JS',
        'image': require('../images/main/nextjs.png')
    },
    {
        'name': 'Gatsby JS',
        'image': require('../images/main/gatsby.png')
    },
    {
        'name': 'HTML',
        'image': require('../images/main/html.png')
    },
    {
        'name': 'CSS',
        'image': require('../images/main/css.png')
    },
    {
        'name': 'Figma',
        'image': require('../images/main/figma.png')
    },
    {
        'name': 'Docker',
        'image': require('../images/main/docker.png')
    }
];


function PageIntro() {

    const [fire, setFire] = useState(false);

    function onChange(isVisible) {
        if (isVisible) {
            !fire && setFire(true);
        }
    }

    return (
        <div className="skills">
            <div className="skillsHeader">Area of expertise</div>
            <div className="skillsContainer">
                <VisibilitySensor onChange={onChange} partialVisibility={true} minTopValue={300}>
                    <div
                        style={{
                            height: '800px',
                            width: '1000px',
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            margin: 'auto'
                        }}
                    >
                        {
                            fire &&
                            skills.map((s, i) =>
                                <motion.div
                                    key={i}
                                    style={{
                                        width: '200px',
                                        height: '200px',
                                        margin: '20px',
                                        background: '#e6e6e6',
                                        flexWrap: 'wrap',
                                        borderRadius: '15px'
                                    }}
                                    initial={{ x: 500, rotate: -10 }}
                                    animate={{ x: 0, rotate: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 120,
                                    }}
                                >
                                    <div className="skill__card">
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                height: '160px'
                                            }}
                                        >
                                            <img
                                                style={{ width: '100px', display: 'block', margin: 'auto' }}
                                                src={s.image}
                                                alt="skills1"
                                            />
                                        </div>
                                        <div style={{
                                            textAlign: 'center', color: '#161748', fontSize: '14px'
                                        }}>
                                            {s.name}
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        }
                    </div>
                </VisibilitySensor>
            </div>

            <style jsx>{`
                .skills{
                    overflow: hidden;
                    margin: 80px auto 0 auto;
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
