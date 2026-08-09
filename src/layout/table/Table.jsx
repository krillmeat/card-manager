import React, {createContext, useEffect,useState} from 'react';
import { TableHead } from './TableHead';
import { useClassName } from '../../hooks/useClassName';
import { Cell } from './Cell';
import { Row } from './Row';

const TableBody = ({children}) => {
  return <div className="table-body">
    {children}
  </div>
}

export const TableContext = createContext(null);

export const Table = ({scrollable=true,colSizes=[],maxRows,bordered,children}) => {
  
  // Convert children into a safe array
  const childrenArray = React.Children.toArray(children);

  // Has Head
  const hasHead = childrenArray.some(
    (child) => React.isValidElement(child) && child.type === TableHead
  );

   const className = useClassName(add => {
    add("table");
    if(bordered) add("bordered");
    if(scrollable) add("scrollable");
  },[bordered,scrollable]);

  return <TableContext.Provider value={{colSizes}}>
    <div className={className}>
      {/* Add Optional Table Data */}
      {!hasHead && <TableHead />}
      {children}
      {/* Add Optional Pagination based on maxRows prop*/}
    </div>
  </TableContext.Provider>
}

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = Row;
Table.Cell = Cell;
