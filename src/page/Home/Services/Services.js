import React from 'react';
import Img1 from '../../../img/mi-removebg-preview.png'
import Img2 from '../../../img/e-removebg-preview.png'
import Img3 from '../../../img/j-removebg-preview.png'

const Services = () => {
  return (
    <div className='services'>
      <div className='container text-center'>
        <div>
        <h2 className='title'>AVAILABLE FOR EVERYONE</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
           Delectus obcaecati tempore recusandae quisquam iure a cumque
            similique velit aliquid! Saepe.</p>
        </div>
        <div className="service-row ">
          <div className="service">
            <div className="service-img shadow">
              <img src={Img1} alt="" srcset="" />
            </div>
            <div className="service-info">
              <h2 className='my-4'>Best Offers</h2>
              <div className='button'>
             <div type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal1">
               Read More
             </div>
             <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
               <div class="modal-dialog">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h5 class="modal-title text-dark" id="exampleModalLabel1">Best offers</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div class="modal-body text-dark text-start ps-5">
                    <h2>Best offers is coming soon !</h2> 
                   </div>
                 </div>
               </div>
             </div>
            </div>
            </div>
          </div>
          <div className="service">
            <div className="service-img shadow">
              <img src={Img2} alt="" srcset="" />
            </div>
            <div className="service-info">
            <h2 className='my-4'>Most Delivery</h2>
            <div className='button'>
             <div type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal2">
               Read More
             </div>
             <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
               <div class="modal-dialog">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h5 class="modal-title text-dark" id="exampleModalLabel2">Most Delivery</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div class="modal-body text-dark text-start ps-5">
                    <h2>Most Delivery 25k+ books</h2>
                   </div>
                 </div>
               </div>
             </div>
            </div>
            </div>
          </div>
          <div className=" ">
            <div className=" service-img shadow">
              <img src={Img3} alt="" srcset="" />
            </div>
            <div className="service-info">
            <h2 className='my-4'>Best Publisher</h2>
            <div className='button'>
             <div type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal">
               Read More
             </div>
             <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h5 class="modal-title text-dark" id="exampleModalLabel">Best Publisher</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div class="modal-body text-dark text-start ps-5">
                    <li> Thomson Reuters</li>
                    <li> Penguin Random House  </li>
                    <li> Hachette Livre </li>
                    <li> HarperCollins </li>
                    <li> Macmillan Publishers </li>
                    <li> Bertelsmann </li>
                    <li> Scholastic Corporation </li>
                    <li> McGraw-Hill Education </li>
                  
                   </div>
                 </div>
               </div>
             </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;