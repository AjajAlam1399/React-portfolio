
import Navbar from "./component/Navbar";
import Home from './component/Home';
import SocialLinks from './component/SocialLinks';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Experience from './component/Experience';
import Contact from './component/Contact';

export default function App(){
  return(
    <>
      <Navbar />
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      <SocialLinks/>
    </>
  )
}