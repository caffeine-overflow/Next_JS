import React from 'react'
import Navbar from '../components/navbar'
import Confeti from '../components/confeti'
import WelcomeScreen from '../components/welcomeScreen'

function index() {
    return (
        <div>
            <Confeti />
            <Navbar />
            <WelcomeScreen />
        </div>
    )
}

export default index
