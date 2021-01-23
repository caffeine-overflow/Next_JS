import React, { useState, useCallback } from 'react'
import Navbar from '../components/navbar'
import Card from '../components/card'

function index() {
    return (
        <div>
            <Navbar />

            <div className='container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
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
