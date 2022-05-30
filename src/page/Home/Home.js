import React from 'react';
import Achievement from './Achievement_section/Achivement';
import ADVERTISE from './AD_Section/ADVERTISE';
import Banner from './Banner';
import Services from './Services/Services';
import Sliders from './Sliders/Sliders';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <ADVERTISE/>
      <Achievement/>
      <Sliders/>
    </div>
  );
};

export default Home;