import Header from "../components/header"
import MainBanner from "../components/MainBanner"
import MainVideo from "../components/MainVideo"
import MainPresentationText from "../components/MainPresentationText"
import ServiceStrip from "../components/ServiceStrip"
import NewServices from "../components/NewServices"
import Interests from "../components/Interests"
import Activities from "../components/Activities"
import MultiuserPackages from "../components/MultiuserPackages"
import ImageSections from "../components/ImageSections"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import Assistant from "../components/Assistant"

const home = () => {
  return (
    <>
    <Header />
    <Assistant />
    <MainVideo />
    <MainPresentationText/>
    <NewServices />
    <Interests />
    <ImageSections/>
    <MultiuserPackages />
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default home