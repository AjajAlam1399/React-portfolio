
import Navbar from "./component/Navbar";
import Home from './component/Home';
import SocialLinks from './component/SocialLinks';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Experience from './component/Experience';
import Contact from './component/Contact';

import {Helmet} from 'react-helmet';

export default function App(){
  return(
    <>
     <Helmet>
        <title>Portfolio</title>
    </Helmet>
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