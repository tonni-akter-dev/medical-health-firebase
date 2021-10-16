import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const[services,setServices]=useState([]);
useEffect(()=>{
    fetch(
        "https://raw.githubusercontent.com/gias-uddin-swe/dcotor-fakeData/main/CategoryData.json"
      )
    .then(res=>res.json())
.then(data=>setServices(data))
},[])
    return (
        <div>


            <div className="container w-100 m-auto p-5">
            <div className="prevention d-flex justify-content-center p-5">
        <img
          src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
          alt=""
        />
        <h6 className="ms-3 me-3">PREVENTION</h6>
        <img
          src="https://cdn.shopify.com/s/files/1/0447/3569/2962/t/2/assets/waves.png"
          alt=""
        />
      </div>
            <div className="row row-cols-3  row-cols-md-2 row-cols-sm-1">
            {
                services.map(service=><Service
                    service={service}></Service> )
            }
            </div>
            </div>
        </div>
    );
};

export default Services;