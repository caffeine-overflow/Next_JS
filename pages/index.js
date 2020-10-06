import React from 'react'
import Navbar from '../components/navbar'
import WelcomeScreen from '../components/welcomeScreen'
import PageIntro from '../components/pageIntro'
import Skills from '../components/skills'

function index() {
    return (
        <div>
            <Navbar />
            <WelcomeScreen />
            <PageIntro />
            <Skills />
        </div>
    )
}

export default index
