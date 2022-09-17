import React from 'react';

function Child({name , age , dept, onChildData }) {
  
    const data = "Hello I am form child and want to send you some data";
    onChildData(data);

  return (
    <>
        <h1> My name is {name}</h1>
        <h3>age {age} and dept {dept}</h3>
    </>
  )
}

export default Child