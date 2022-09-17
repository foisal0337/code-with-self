import React from 'react';
import { Navigate } from 'react-router-dom';

function Access({children}) {
 const IsLogin = false;
  if(!IsLogin){
    return <Navigate to='/' replace />
  }else{
    return children
  }
}

export default Access