import React, { useState } from 'react';

function ShowHide() {
    const [state,setState] = useState(true);

    const handelclick = () =>{
        setState(!state);
    }

  return (
    <>
    
     { state &&  <p> This is normal text showing and hinding working process </p>}
     { state && <button onClick={handelclick} >Hide</button> }
    { !state && <button onClick={handelclick}>Show</button> }
     
      
     {}   
    </>
  )
}

export default ShowHide