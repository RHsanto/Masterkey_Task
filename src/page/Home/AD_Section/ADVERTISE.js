import React, { useState } from 'react';
import BANNER_AD from './BANNER_AD';
import NATIVE from './NATIVE';
import POP_UNDER from './POP_UNDER';
import SKIM from './SKIM';

const ADVERTISE = () => {
  const[info,setInfo]=useState(<POP_UNDER/>)

  const handlePopUnder =(e)=>{
    setInfo(<POP_UNDER/>)}
     const handleBanner =(e)=>{
    setInfo(<BANNER_AD/>)}
     const handleSkim =(e)=>{
    setInfo(<SKIM/>)}
     const handleNative =(e)=>{
    setInfo(<NATIVE/>)}
  return (
    <div> 
     <div className="container">
       <h2 className="title">VERSATILE AD FORMATS</h2>
        <div className="d-flex justify-content-between my-5 nested-btn">
          <button onClick={handlePopUnder} className='active'>POP-UNDER</button> 
          <button onClick={handleBanner}>BANNER AD</button>
          <button onClick={handleNative}>NATIVE</button>
          <button onClick={handleSkim}>SKIM</button>
        </div>
{/* here nested result */}
       <div className='pt-3'>
         {info}
       </div>
     </div>
    </div>
  );
};

export default ADVERTISE;