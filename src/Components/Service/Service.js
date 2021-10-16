import React from 'react';

const Service = (props) => {
    console.log(props);
    // const =props.service;

    return (
        <div key={props.service?.id} className="col-md-6 col-lg-4 col-sm-12">
            <div className=" p-3 m-2 border ">
              <div>
                <img src={props.service?.image} alt="" />
              </div>
              <h6 className="mt-4">{props.service?.name}</h6>
              <p className="mt-2">{props.service?.description}</p>
            </div>
          </div>
    );
};

export default Service;