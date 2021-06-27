import React, { useState, useCallback } from 'react'
import Navbar from '../components/navbar'
import Card from '../components/card'

function index() {
    let projectArray = [
        {
            name: 'E-Commerce Web App',
            desc: 'This is the description',
            stack: ['React', 'HTML', 'CSS']
        },
        {
            name: 'E-Commerce Web App',
            desc: 'This is the description',
            stack: ['React', 'HTML', 'CSS']
        },
        {
            name: 'E-Commerce Web App',
            desc: 'This is the description',
            stack: ['React', 'HTML', 'CSS']
        },
        {
            name: 'E-Commerce Web App',
            desc: 'This is the description',
            stack: ['React', 'HTML', 'CSS']
        }
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
