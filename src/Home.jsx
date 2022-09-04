import { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import { useGlobalContext } from "./Context";
import Services from "./Services"
import Contact from "./Contact"

function Home(){
    const { updateHomePage } = useGlobalContext();

    useEffect(() => updateHomePage(), []);
  
    return (
        <>
        <HeroSection />
        <Services />
        <Contact />
        </>
    )
}
export default Home;