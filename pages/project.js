import React, { useState, useCallback } from 'react'
import Navbar from '../components/navbar'
import Card from '../components/card'
import Footer from '../components/footer'
import Head from "next/head";

function index() {
    let projectArray = [
        {
            name: 'E-Commerce Web App',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            stack: ['React', 'HTML', 'CSS'],
            images: [
                { url: require('../images/projects/ohlala.png') },
                { url: require('../images/projects/ohlala2.png') },
                { url: require('../images/projects/ohlala3.png') },
                { url: require('../images/projects/ohlala4.png') },
                { url: require('../images/projects/ohlala5.png') },
            ]
        },
        {
            name: 'Android App',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            stack: ['React', 'HTML', 'CSS'],
            images: [
                { url: require('../images/projects/android1.png') },
                { url: require('../images/projects/android2.png') },
                { url: require('../images/projects/android3.png') },
            ]
        },
        {
            name: 'Point of Sales - Desktop App',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            stack: ['React', 'HTML', 'CSS'],
            images: [
                { url: require('../images/projects/pos1.png') },
                { url: require('../images/projects/pos2.png') },
                { url: require('../images/projects/pos3.png') },
            ]
        },
        {
            name: 'Survival Game',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            stack: ['React', 'HTML', 'CSS'],
            images: [
                { url: require('../images/projects/survival1.png') },
                { url: require('../images/projects/survival2.png') },
                { url: require('../images/projects/survival3.png') },
            ]
        },
        {
            name: 'Portfolio',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            stack: ['React', 'HTML', 'CSS'],
            images: [
                { url: require('../images/projects/portfolio.png') }
            ]
        },
        {
            name: 'Bird Game',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            stack: ['React', 'HTML', 'CSS'],
            images: [
                { url: require('../images/projects/bird1.png') },
                { url: require('../images/projects/bird2.png') }
            ]
        },
        {
            name: 'Mini Golf Game',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            stack: ['React', 'HTML', 'CSS'],
            images: [
                { url: require('../images/projects/golf1.png') }
            ]
        },
        {
            name: 'RStats',
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
            stack: ['React', 'HTML', 'CSS'],
            images: [
                { url: require('../images/projects/rstats1.png') },
                { url: require('../images/projects/rstats2.png') },
            ]
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
