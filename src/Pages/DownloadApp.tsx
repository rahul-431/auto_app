import React from 'react'
import DownloadLink from '../Components/DownloadLink'
import Navbar from '../Components/SharedComponent/Navbar'
import Footer from '../Components/SharedComponent/Footer'

function DownloadApp() {
    return (
        <div>
            <Navbar></Navbar>
            <DownloadLink />
            <Footer />
        </div>
    )
}

export default DownloadApp
