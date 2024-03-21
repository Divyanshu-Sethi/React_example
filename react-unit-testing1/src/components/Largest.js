import React from 'react'

function Largest(props) {

    
    let a = props.no1;
    let b = props.no2;
    let c = props.no3;
    let result;

    if(a>=b && a>=c)
    {
        
        result = <p>No1: {a} is the Largest.</p>
        
    }
    else if(b>=a && b>=c){
        result=<p>No2: {b} is the Largest.</p>
    }
    else{
        result=<p>No3: {c} is the Largest.</p>
    }
  return (
    <div>
        {result}
    </div>
  )
}

export default Largest