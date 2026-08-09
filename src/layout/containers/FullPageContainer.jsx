import React, {useEffect,useState} from 'react';


export const FullPageContainer = ({children}) => {
  return(<div className='container full-page'>
    {children}
  </div>)
}
