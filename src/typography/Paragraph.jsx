import React, {useEffect,useState} from 'react';
import { useClassName } from '../hooks/useClassName';

export const Span = ({children, ...rest }) => {
  const className = useClassName({...rest});

  return(<span className={className}>
    {children}
  </span>)
}

export const Paragraph = ({bold=false,pad=0,padX=0, padY=0,uppercase,children}) => {

  const className = useClassName(add => {
    if(bold) add("bold")
    if(pad) add(`pad-${pad}`)
    if(padX) add(`pad-x-${padX}`)
    if(padY) add(`pad-y-${padY}`)
    if(uppercase) add ('uppercase');
  },[bold,padX,padY,pad,uppercase])

  return(<p className={className}>
    {children}
  </p>)
}
