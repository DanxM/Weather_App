import React from 'react';
import Cardfooter from './Cardfooter'
import _ from 'lodash/string'

function Report(prop){

return(
  <div className="container ">
    <div className="row ">

      <div className="col-md-12 col-sm-4 " style={{height:"100%"}}>

        <div className="card bg-dark carbg pt-1 mx-auto " style={{width:"18rem", height:"100%", borderRadius:"25px"}}>
          <p className="display-6 text-center py-3 mb-0 fs-6 fw-bold">{prop.city}, {prop.country}</p>
          <img src={prop.icon} className ="card-img-top mx-auto" style={{width:"10rem", height:"10rem"}} alt="weathericon" />
          <div className="card-body pt-0 mb-2">
              <h1 className="card-title display-5 fw-bold text-center ps-4 pt-1" style={{fontSize:"3rem"}}>{prop.curr}&deg;</h1>
              <p className="text-center fs-5">{_.startCase(prop.descr)}</p>
            </div>
          <Cardfooter min={prop.min} humid={prop.humid} max={prop.max} />
          </div>
      </div>

    </div>
  </div>

);

}

export default Report;
