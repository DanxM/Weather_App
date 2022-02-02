import React from 'react';

function Measure(props){
  return(
    <div className="col-md-4 col-sm-4 px-0 pb-0" style={{fontSize:"0.8rem"}}><p>{props.name}<p className="fw-normal fs-4">{props.value} {props.sign}</p></p>
    </div>
  );
}

export default Measure;
