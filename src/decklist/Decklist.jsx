import React, {useEffect,useState} from 'react';
import { useClassName } from '../hooks/useClassName';
import { DecklistHead } from './DeacklistHead';
import { Table } from '../layout/table/Table';

const TEMP_SOURCE = {
  pilot:"KRILLMEAT",
  time:"08.26",
  url:"",
  format:"bnpb"
}

// Table-based list
export const Decklist = ({decklist,inBuilder=false,bordered=false}) => {
  const className = useClassName(add => {
    add('decklist')
    if(bordered) add("bordered");
  },[bordered]);

  return(<div className={className}>
    <DecklistHead deckName="New Deck" source={TEMP_SOURCE} inBuilder={inBuilder} />
    <Table colSizes={["2rem","6rem",8,"6rem"]}>
      <Table.Head columnLabels={["","Number","Card Name","Points"]} />
    </Table>
  </div>)
}
