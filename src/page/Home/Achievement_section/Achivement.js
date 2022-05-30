import React from 'react';

const Achievement = () => {
  return (
    <div className='achievement text-center'>
     <div className="container">
     <h2 className=' text-light mb-5'>OUR ALL ACHIEVEMENTS </h2>
     <div className="row achievement-row pt-5">
       <div className="col-lg-4 p-5">
         <div className="circle-1">
           <h1>1 BN+</h1> 
           <p>Daily Impressions</p>
         </div>
        
       </div>
       <div className="col-lg-4 p-5">
       <div className="circle-2">
        <h1> $500k+</h1>
        <p>Paid</p>
       </div>
       </div>
       <div className="col-lg-4 p-5">
       <div className="circle-3">
       <h1> 8k+</h1>
        <p>Global Publishers</p>
       </div>
       </div>
     </div>
     </div>
    </div>
  );
};

export default Achievement;