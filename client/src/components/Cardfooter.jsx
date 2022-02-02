import React from 'react';
import Measure from './measure'

function Cardfooter(prop){
  return(
    <div className="card-footer border-0 bg-transparent fw-light text-center row align-items-end m-0 px-0 pb-2">
      <Measure name="Temp min" value= {prop.min} sign="&deg;"  />
      <Measure name="Humidity" value= {prop.humid}  sign="%" />
      <Measure name="Temp max" value= {prop.max}  sign="&deg;" />
    </div>
  );
}

export default Cardfooter;
