import React, { useState, useCallback } from 'react'
import Navbar from '../components/navbar'
import Card from '../components/card'
import Footer from '../components/footer'
import Head from "next/head";

function index() {
    let projectArray = [
        {
            name: 'Runtime App',
            desc: 'Runtime is a agile project management tool for software development. Now you don\'t have to open multiple applications to handle your software development process. "Plan, Build or Discuss", we provide solution for all problems in simple, single platform. Crafted with essential features in a light, simple and modern design. Almost every features of an "Agile Project Management Software" is included in the app. Along with that the app also have ability to link with github to handle organization level operations. Most of the daily used git operations are handled by just a simple click. Chat feature is also included in the application so that the members don\'t have to go to different platforms to communicate. Any member can can message anyone within the organization.Along with messaging, video and group chat features are also supported by the application.',
            stack: ['NodeJS', 'React', 'MongoDB', 'Python', 'SocketIO', 'HTML', 'CSS'],
            images: [
                { url: require('../images/projects/runtime1.png') },
                { url: require('../images/projects/runtime2.png') },
                { url: require('../images/projects/runtime3.png') },
                { url: require('../images/projects/runtime4.png') },
            ],
            git: 'https://github.com/caffeine-overflow/Runtime',
            exe: null,
            link: 'https://runtimeapp.herokuapp.com/'
        },
        {
            name: 'E-Commerce Web App',
            desc: "",
            stack: ['React', 'HTML', 'CSS', 'StripeAPI'],
            images: [
                { url: require('../images/projects/ohlala.png') },
                { url: require('../images/projects/ohlala2.png') },
                { url: require('../images/projects/ohlala3.png') },
                { url: require('../images/projects/ohlala4.png') },
                { url: require('../images/projects/ohlala5.png') },
            ],
            git: 'https://github.com/caffeine-overflow/ecw',
            exe: null,
            link: 'https://ohlalaa.herokuapp.com/'
        },
        {
            name: 'Portfolio',
            desc: "",
            stack: ['NextJS', 'React', 'HTML', 'CSS'],
            images: [
                { url: require('../images/projects/portfolio.png') }
            ],
            git: 'https://github.com/caffeine-overflow/Next_JS',
            exe: null,
            link: null
        },
        {
            name: 'Point of Sales - Desktop App',
            desc: "",
            stack: ['Java', 'Mysql'],
            images: [
                { url: require('../images/projects/pos1.png') },
                { url: require('../images/projects/pos2.png') },
                { url: require('../images/projects/pos3.png') },
            ],
            git: 'https://github.com/caffeine-overflow/Java-POS',
            exe: '/pos.zip',
            link: null
        },
        {
            name: 'Android App',
            desc: "",
            stack: ['Java', 'SQLite'],
            images: [
                { url: require('../images/projects/android1.png') },
                { url: require('../images/projects/android2.png') },
                { url: require('../images/projects/android3.png') },
            ],
            git: 'https://github.com/caffeine-overflow/ECW-androif',
            exe: null,
            link: null
        },
        {
            name: 'Survival Game',
            desc: "",
            stack: ['C#', 'Unity'],
            images: [
                { url: require('../images/projects/survival1.png') },
                { url: require('../images/projects/survival2.png') },
                { url: require('../images/projects/survival3.png') },
            ],
            git: null,
            exe: '/survival.zip',
            link: null
        },
        {
            name: 'Bird Game',
            desc: "",
            stack: ['C#', 'Unity'],
            images: [
                { url: require('../images/projects/bird1.png') },
                { url: require('../images/projects/bird2.png') }
            ],
            git: null,
            exe: '/birdgame.zip',
            link: null
        },
        {
            name: 'Mini Golf Game',
            desc: "",
            stack: ['C#', 'Unity'],
            images: [
                { url: require('../images/projects/golf1.png') }
            ],
            git: null,
            exe: '/golf.zip',
            link: null
        },
        {
            name: 'RStats',
            desc: "",
            stack: ['C'],
            images: [
                { url: require('../images/projects/rstats1.png') },
                { url: require('../images/projects/rstats2.png') },
            ],
            git: 'https://github.com/caffeine-overflow/rstats',
            exe: '/rstats.zip',
            link: null
        },
    ];

    return (
        <div>
            <Navbar />
            <div className='container'>
                {
                    projectArray.map((p, i) => {
                        return <Card
                            key={i}
                            index={i}
                            animationDirection={i % 2 == 0 ? 'right' : 'left'}
                            info={projectArray[i]}
                        />
                    })
                }
            </div>
            <Footer />
            <style jsx>
                {`
                    .container{
                        display: flex;
                        flex-wrap: wrap;
                        width: 90%;
                        margin: 50px auto;
                    } 
                `}
            </style>
        </div>
    )
}

export default index
