import React, {useEffect,useState} from 'react';
import { Cell } from './Cell';


export const TableHead = ({columnLabels,children}) => {
  return(<div className='table-head'>
    {/* If there are no Column Labels, or there are children passed in */}
    {(!columnLabels || React.Children.count(children) > 0) && React.Children.map(children, (child,index) => {
      return React.cloneElement(child, { index: index })
    })}

    {/* If there are no children inside, and there are column labels provided */}
    { (React.Children.count(children) === 0 && Array.isArray(columnLabels)) && 
        columnLabels.map((label,index) => <Cell index={index}>{label}</Cell>) }
  </div>)
}
