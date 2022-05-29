import React from 'react';
import Img1 from '../../../img/mi-removebg-preview.png'
import Img2 from '../../../img/e-removebg-preview.png'
import Img3 from '../../../img/j-removebg-preview.png'

const Services = () => {
  return (
    <div className='services'>
      <div className='container text-center'>
        <div>
        <h1>AVAILABLE FOR EVERYONE</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
           Delectus obcaecati tempore recusandae quisquam iure a cumque
            similique velit aliquid! Saepe.</p>
        </div>
        <div className="service-row mt-5">
          <div className="service">
            <div className="service-img shadow">
              <img src={Img1} alt="" srcset="" />
            </div>
            <div className="service-info">
              <h2>Title 1</h2>
              <button>Hello 1</button>
            </div>
          </div>
          <div className="service">
            <div className="service-img shadow">
              <img src={Img2} alt="" srcset="" />
            </div>
            <div className="service-info">
              <h2>Title 2</h2>
              <button>Hello 2</button>
            </div>
          </div>
          <div className=" ">
            <div className=" service-img shadow">
              <img src={Img3} alt="" srcset="" />
            </div>
            <div className="service-info">
              <h2>Title 3</h2>
              <button>Hello 3</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;