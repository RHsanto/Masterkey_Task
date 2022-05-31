import React from 'react';
import { Link } from 'react-router-dom';
import { RiExternalLinkFill } from "react-icons/ri";
import img from '../../../img/pop.jpeg'
const POP_UNDER = () => {
  return (
    <div className='container'>
      <div className="row">
          <div className="col-lg-5">
            <img className='w-100 h-100' src={img} alt="" />
          </div>
          <div className="col-lg-7 add-info">
            <h2>POP-UNDER</h2>
           <p>Book sales are transitioning to online sales — 55 percent of all book sales in the US are now made 
             on Amazon. The top book publishing companies in the world are changing their sales strategies to
              ...
              </p>
              {/* here modal */}
             <div>
             <div type="button" class="" data-bs-toggle="modal" data-bs-target="#exampleModal3">
             <Link to='/#' className='learn-link'>Learn more <RiExternalLinkFill/></Link>
             </div>
             <div class="modal fade" id="exampleModal3" tabindex="-1"
              aria-labelledby="exampleModalLabel3" aria-hidden="true">
               <div class="modal-dialog">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h5 class="modal-title text-dark" id="exampleModalLabel3">Best offers</h5>
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                   </div>
                   <div class="modal-body text-dark text-start ps-5">
                   <img className='w-100 h-100' src={img} alt="" />
                   <p>Book sales are transitioning to online sales — 55 percent of all book sales in the US are now made 
                    on Amazon. The top book publishing companies in the world are changing their sales strategies to
                    target these new types of online customers through selling electronic versions (eBooks) 
                   of their books and targeting devices such as the Kindle and other readers as well.
                  </p>
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

export default POP_UNDER;