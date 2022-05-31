import React, { useEffect, useState } from 'react';

const Publisher = () => {
  const[publishers,setPublisher]=useState([]);
  useEffect(()=>{
    fetch('./publisher.json')
    .then(res=>res.json())
    .then(data=>setPublisher(data))
  },[])
  return (
    <div>
      <div className="container py-5 ">
      <h2 className='title py-5' >OUR ALL PUBLISHER</h2>
        <div className="row  row-cols-1 row-cols-md-4 g-3">
          {publishers?.map(data=>
            <div class="col text-center" >
            <div class="card">
              <img src={data?.img} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title fw-bold">{data?.name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Publisher;