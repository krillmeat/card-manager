import React, {useEffect,useState} from 'react';

const ButtonGroup = ({onClick=()=>{},children}) => {
  return <div className="button-group">
    {children}
  </div>
}

const BarButton = ({onClick=()=>{},children}) => {
  return <button className='bar'>
    {children}
  </button>
}

export const Button = ({onClick=()=>{},children}) => {
  return(<button onClick={onClick}>
    {children}
  </button>)
}

Button.Bar = BarButton;
Button.Group = ButtonGroup;
