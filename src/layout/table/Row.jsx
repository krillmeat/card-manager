import React, {useEffect,useState} from 'react';
import { Cell } from './Cell';
import { useClassName } from '../../hooks/useClassName';


export const Row = ({children}) => {

  const className = useClassName(add => {
    add("row");
  });

  return(<div className={className}>
    {React.Children.map(children, (child,index) => {
      return React.cloneElement(child, { index: index })
    })}
  </div>)
}
