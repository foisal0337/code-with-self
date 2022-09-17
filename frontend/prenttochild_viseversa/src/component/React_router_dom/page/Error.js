import React from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  return (
    <div>404 This is error page 
    <button onClick={()=>navigate('/')} >Go to main page Right now </button>  
    </div>
  )
}

export default Error