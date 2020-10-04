import React from 'react'
import Navbar from '../components/navbar'
import WelcomeScreen from '../components/welcomeScreen'
import PageIntro from '../components/pageIntro'

function index() {
    return (
        <div>
            <Navbar />
            <WelcomeScreen />
            <PageIntro />
        </div>
    )
}

export default index
