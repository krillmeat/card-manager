import React, {useEffect,useState} from 'react';
import { Button } from '../layout/buttons/Button';
import { Paragraph, Span } from '../typography/Paragraph';
import { useClassName } from '../hooks/useClassName';

const POINT_FORMATS = ["bfpb","bnpb","hare2","newhoff"];

export const DecklistHead = ({deckName="Decklist",source={}, inBuilder}) => {
  const {pilot,format,time,url} = source;

  return(<div className='decklist-head'>
    <h3>{deckName}</h3>
    <div className="source">
      <Paragraph><Span bold>{pilot}</Span> | {time}</Paragraph>
    </div>
    <div className='control-bar'>
      {POINT_FORMATS.includes(source.format) && <Paragraph pad={3} uppercase bold>Points</Paragraph>}
      <Button.Group>
        <Button.Bar>View</Button.Bar>
        {inBuilder && <Button.Bar>Import</Button.Bar>}
        <Button.Bar>Export</Button.Bar>
        <Button.Bar>Share</Button.Bar>
      </Button.Group>
    </div>
  </div>)
}
