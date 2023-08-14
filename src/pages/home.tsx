import Header from "../components/header"
import MainBanner from "../components/MainBanner"
import MainVideo from "../components/MainVideo"
import MainPresentationText from "../components/MainPresentationText"
import ServiceStrip from "../components/ServiceStrip"
import Activities from "../components/Activities"
import ImageSections from "../components/ImageSections"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

const home = () => {
  return (
    <>
    <Header />
    {/* <MainBanner /> */}
    <MainVideo />
    <MainPresentationText/>
    <ServiceStrip />
    {/* <Activities/> */}
    <ImageSections/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default home