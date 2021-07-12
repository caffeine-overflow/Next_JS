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
            <Head>
                <script src="https://use.fontawesome.com/releases/v5.0.13/js/all.js" integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe" crossorigin="anonymous"></script>
            </Head>
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
