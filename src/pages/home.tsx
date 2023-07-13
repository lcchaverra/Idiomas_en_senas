import Header from "../components/header"
import MainBanner from "../components/MainBanner"
import ServiceStrip from "../components/ServiceStrip"
import Activities from "../components/Activities"
import ImageSections from "../components/ImageSections"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

const home = () => {
  return (
    <>
    <Header />
    <MainBanner />
    <ServiceStrip />
    <Activities/>
    <ImageSections/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default home