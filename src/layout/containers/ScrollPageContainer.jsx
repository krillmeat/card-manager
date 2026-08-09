import React, {useEffect,useState} from 'react';


// Used for things like the home page, or guides
export const ScrollPageContainer = ({children}) => {
  return(<div className='container scroll-page'>
    {children}
  </div>)
}
