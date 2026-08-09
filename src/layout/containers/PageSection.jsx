import React, {useEffect,useMemo,useState} from 'react';


export const PageSection = ({noPadding,children}) => {
  
  const className = useMemo(()=>{
    let list = ['page-section'];
    if(noPadding) list.push("no-padding");
    return list.join(" ");
  },[noPadding]);
  
  return(<section className={className}>
    {children}
  </section>)
}
