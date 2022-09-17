import React, { useState } from 'react';
import DesktopBar from './DesktopBar';
import Phoneber from './Phoneber';

function Conditional() {

    const [change,setChage] = useState(false);

    const handelCkick = () =>{
        setChage(!change);
    }   

  return (
    <>
     <button onClick={handelCkick} > click me for change </button>
     { change ? <DesktopBar/> : <Phoneber/>}
    </>
  )
}

export default Conditional