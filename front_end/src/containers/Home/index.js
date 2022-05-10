import React, { useEffect } from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../components/About';

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
    </>
   )

 }

export default Home