import React from "react"
import Navbar from "../Components/Navbar"
import RepairSection from "../Components/Repair/RepairSection"
import WhatMakes from "../Components/WhatMakes/WhatMakes"
import WhyUs from "../Components/WhyUs/WhyUs"
import Header from "../Components/Header/Header"
import OurService from "../Components/Ourservices/OurService"
import FAQ from "../Components/FAQ/FAQ"
import Footer from "../Components/Footer/Footer"
import Testmonials from "../Components/Testmonials/Testmonials"


const HomePage = ()=>{
    return (
        <div>
            <Navbar />
            <Header />
            <RepairSection />
            <WhatMakes />
            <WhyUs />
            <OurService />
            <FAQ />
            <Testmonials />
            <Footer />
        </div>
    )
}


export default HomePage