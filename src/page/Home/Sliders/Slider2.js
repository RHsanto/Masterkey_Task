import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import Slider from "react-slick";
const Slider2 = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    
  };
  const [sliders,setSliders]=useState([]);
  useEffect(()=>{
    fetch('./slider.json')
    .then(res=>res.json())
    .then(data=>setSliders(data))
  },[])
  return (
    <div className='sliders'>
      <div className="container">
        <h2 className='title'>OUR HAPPY CUSTOMER </h2>
        <Slider {...settings} >
          {sliders?.map(data=>
            <div className='slide  d-flex justify-content-center '>
            <div className="slide-img">
              <img src={data?.img} alt="" />
            </div>
            <div className="slide-info p-3">
              <h2>{data?.name}</h2>
              <p>{data?.reviews}</p>
              <Rating 
                emptySymbol="far fa-star text-warning"
                fullSymbol="fas fa-star text-warning"
                readonly
                initialRating={data?.ratings}> 
              </Rating>
            </div>
           </div>
            )}
        
        </Slider>
      </div>
    </div>
  );
};

export default Slider2;