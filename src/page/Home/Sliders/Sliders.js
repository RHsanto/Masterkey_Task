import React from 'react';
import Slider from "react-slick";
const Sliders = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    
  };
  return (
    <div className='sliders'>
      <div className="container">
        <h2 className='title'>OUR HAPPY CUSTOMER </h2>
        <Slider {...settings} >
          <div className='slide  d-flex justify-content-center align-items-center'>
           <div className="slide-img">
             <img src="https://learning-management-system-theta.vercel.app/static/media/learning-2.d1759e5361aaa4a0e5bd.png" alt="" />
           </div>
           <div className="slide-info">
             <h2>Do You Want to Learn here?</h2>
             <p>Dramatically supply transparent  deliverables before & can backward comp internet or organic sources.</p>
           </div>
          </div>
          <div className='slide d-flex justify-content-center align-items-center'>
           <div className="slide-img">
             <img src="https://learning-management-system-theta.vercel.app/static/media/madam-3.cecfbd9d3246c3fe119d.png" alt="" />
           </div>
           <div className="slide-info">
             <h2>Do You Want to Learn here?</h2>
             <p>Dramatically supply transparent deliverables before & you.</p>
           </div>
          </div>
          <div className='slide  d-flex justify-content-center align-items-center'>
           <div className="slide-img">
             <img src="https://learning-management-system-theta.vercel.app/static/media/learning-2.d1759e5361aaa4a0e5bd.png" alt="" />
           </div>
           <div className="slide-info">
             <h2>Do You Want to Learn here?</h2>
             <p>Dramatically supply transparent deliverables before & you.</p>
           </div>
          </div>
          <div className='slide d-flex justify-content-center align-items-center'>
           <div className="slide-img">
             <img src="https://learning-management-system-theta.vercel.app/static/media/madam-3.cecfbd9d3246c3fe119d.png" alt="" />
           </div>
           <div className="slide-info">
             <h2>Do You Want to Learn here?</h2>
             <p>Dramatically supply transparent deliverables before & you.</p>
           </div>
          </div>
          <div className='slide  d-flex justify-content-center align-items-center'>
           <div className="slide-img">
             <img src="https://learning-management-system-theta.vercel.app/static/media/learning-2.d1759e5361aaa4a0e5bd.png" alt="" />
           </div>
           <div className="slide-info">
             <h2>Do You Want to Learn here?</h2>
             <p>Dramatically supply transparent deliverables before & you.</p>
           </div>
          </div>
          <div className='slide d-flex justify-content-center align-items-center'>
           <div className="slide-img">
             <img src="https://learning-management-system-theta.vercel.app/static/media/madam-3.cecfbd9d3246c3fe119d.png" alt="" />
           </div>
           <div className="slide-info">
             <h2>Do You Want to Learn here?</h2>
             <p>Dramatically supply transparent deliverables before & you.</p>
           </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;