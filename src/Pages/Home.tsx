import React from 'react'
import Navbar from '../Components/SharedComponent/Navbar'
import Hero from '../Components/HomeComponent/Hero'
import Footer from '../Components/SharedComponent/Footer'
import Earn_With_us from '../Components/HomeComponent/Earn_With_us'
import Banner from '../Components/HomeComponent/Banner'
import DownloadLink from '../Components/DownloadLink'


function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Earn_With_us />
            <Banner />

            <DownloadLink />
            -banner-
            <Footer />

        </>

    )
}

export default Home