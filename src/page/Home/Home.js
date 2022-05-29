import React from 'react';
import Achievement from './Achievement_section/Achivement';
import AD from './AD_Section/AD';
import Banner from './Banner';
import Services from './Services/Services';
import Sliders from './Sliders/Sliders';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Services/>
      <AD/>
      <Achievement/>
      <Sliders/>
    </div>
  );
};

export default Home;