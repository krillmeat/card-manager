import React, {useContext, useEffect,useMemo,useState} from 'react';
import { useClassName } from '../../hooks/useClassName';
import { TableContext } from './Table';

export const Cell = ({
  index,
  background,
  classList,
  styles={},
  onClick=()=>{},
  children}) => {

  const className = useClassName(add => {
    add("cell");
    if(Array.isArray(classList)) for(let cn of classList){ add(cn); }
  },[classList]);

  const context = useContext(TableContext);
  if (!context) return null; // TODO: This should have a default that ignores sizing and stuff.
  
  const _size = context.colSizes[index];
  const size = typeof _size === "number" ? `${_size*6.25}%` : _size;

  const safeChildren = Array.isArray(children) ? children : [children];

  return(<div className={className} style={{width:size, ...styles}} onClick={onClick}>
    {safeChildren.map((child) => {
    // If it's a plain JavaScript object (and NOT a valid React element)
    if (typeof child === 'object' && child !== null && !React.isValidElement(child)) {

      if(child.type === "icon"){
        return <svg className="table-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 38"><path d={child.d}/></svg>
      }

      if(child.type === "text"){
        return <span>{child?.text}</span> 
      }

      // If nothing matches, just move on
      return null;
    }

    // Return strings, numbers, or existing React elements as-is
    return <span>{child}</span>;
  })}
  </div>)
}
