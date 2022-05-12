import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../components/About';
import { Icon } from '../../components/Icon';
import Footer from '../../components/Footer';
import Scroll from '../../components/Scroll/scroll';
import { Contact } from '../../components/Contact';
import { Reservation } from '../../components/Reservation';

/**
* @author
* @function Home
**/

const Home = (props) => {

  return(
    <>
        <Header />
        <Banner />
        <About />
        <Icon />
        <Reservation />
        <Contact />
        <Footer />
        <Scroll />
    </>
   )

 }

export default Home