import React from 'react'
import Navbar from '../components/navbar'
import WelcomeScreen from '../components/welcomeScreen'
import PageIntro from '../components/pageIntro'
import Skills from '../components/skills'
import Quote from '../components/quote'

function index() {
    return (
        <div>
            <Navbar />
            <WelcomeScreen />
            <PageIntro />
            <Quote />
            <Skills />
        </div>
    )
}

export default index
