import React from 'react';
import Achievement from './Achievement_section/Achivement';
import ADVERTISE from './AD_Section/ADVERTISE';
import Banner from './Banner';
import Services from './Services/Services';
import Slider2 from './Sliders/Slider2';
import Sliders from './Sliders/Sliders';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <ADVERTISE/>
      <Achievement/>
      <div className="d-lg-none d-block"><Slider2/></div>
      <div className="d-none d-lg-block"><Sliders/></div>
    </div>
  );
};

export default Home;