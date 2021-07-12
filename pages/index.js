import React from 'react'
import Navbar from '../components/navbar'
import WelcomeScreen from '../components/welcomeScreen'
import PageIntro from '../components/pageIntro'
import Skills from '../components/skills'
import Quote from '../components/quote'
import Footer from '../components/footer'
import Head from "next/head";

function index() {
    return (
        <div>
            <Navbar />
            <WelcomeScreen />
            <PageIntro />
            <Skills />
            <Quote />
            <Footer />
        </div>
    )
}

export default index
