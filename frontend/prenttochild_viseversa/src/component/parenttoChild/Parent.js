import React from 'react';
import Child from './Child.js';

function Parent() {

  const handelChild = (d) =>{
    console.log(d);
  }

  return (
    <>
      <Child  name='Faisal Ahmed' age='21' dept='cse' onChildData={handelChild} />
      {/* <Child  name='Apple' age='22' dept='sells' />      
      <Child  name='Youhana' age='22' dept='cse' />  */}
    </>
  )
}

export default Parent