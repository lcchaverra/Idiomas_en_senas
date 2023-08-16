import Header from "../components/header"
import MainBanner from "../components/MainBanner"
import MainVideo from "../components/MainVideo"
import MainPresentationText from "../components/MainPresentationText"
import ServiceStrip from "../components/ServiceStrip"
import Activities from "../components/Activities"
import ImageSections from "../components/ImageSections"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import Assistant from "../components/Assistant"

const home = () => {
  return (
    <>
    <Header />
    <Assistant />
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