import { ScrollPageContainer } from './layout/containers/ScrollPageContainer'
import { PageSection } from './layout/containers/PageSection'

import './index.css'
import { TopNav } from './layout/navigation/TopNav';
import { Routes } from 'react-router';
import { FullPageContainer } from './layout/containers/FullPageContainer';
import { Table } from './layout/table/Table';
import { Decklist } from './decklist/Decklist';

const ENERGY_ICONS = {
  GRASS: "M22.47,3.64c-.25-.17-.57-.21-.86-.12-.67.21-16.32,5.36-16.5,16.83-.09,5.63,2.97,9.31,8.63,10.4l.63,3c.1.46.51.79.98.79h4.49c.55,0,1-.45,1-1v-2.57c3.64-.35,10.28-2.07,11.74-9.74.04-.23.08-.69.12-1.4.02-.32.04-.61.05-.74,0-.05,0-.11,0-.16-.01-.36-.48-8.79-10.29-15.3ZM15.44,24.88l-.03-.02c-2.16-2.62-4.97-2.92-6.11-2.92-.32,0-.51.02-.51.02-.16.03-.27-.05-.33-.09-.06-.04-.15-.14-.17-.3-.03-.24.14-.47.38-.5.12-.02,3.06-.35,5.81,1.68.29.21.66.25.99.12.33-.14.55-.44.6-.79.1-.76.22-1.57.37-2.42.06-.31-.04-.63-.26-.86-1.72-1.82-5.63-1.95-5.67-1.95-.25,0-.44-.21-.44-.46,0-.13.05-.25.14-.33.08-.07.18-.1.32-.1.3,0,3.01.1,5.09,1.29.27.15.6.17.89.05.29-.12.5-.37.58-.68.13-.54.28-1.09.44-1.64.08-.26.04-.54-.09-.78-.02-.03-.03-.06-.04-.09-.05-.19-.16-.35-.31-.48-.52-.44-1.78-.93-2.71-1.16-.24-.06-.38-.3-.32-.54.04-.16.15-.24.2-.27.06-.03.18-.09.34-.05.55.14,1.6.45,2.49.97.25.15.56.18.83.09.28-.09.5-.31.61-.58.65-1.63,1.39-3.08,2.21-4.32.09-.13.21-.18.28-.19.07-.01.2-.02.34.06.13.09.18.22.19.28.01.07.02.2-.07.34-.42.64-.83,1.35-1.21,2.11-.17.35-.13.77.11,1.07.24.3.64.44,1.02.34,1.5-.38,3.07-.44,4.67-.19.24.04.41.27.37.51-.04.24-.27.41-.51.37-3.25-.51-5.63.48-6.75,1.13-.22.12-.38.32-.46.56-.2.61-.39,1.23-.55,1.84-.1.36.01.74.29.99.27.25.67.33,1.01.21,1.88-.66,4.77-1.35,7.93-.83.24.04.41.27.37.51-.04.24-.27.41-.51.37-3.98-.65-7.55.7-9.33,1.56-.29.14-.49.41-.55.72-.15.84-.28,1.64-.38,2.4-.05.35.09.7.37.92.28.22.65.28.97.15,2.59-.97,6.31-2.05,9.28-1.62.16.02.25.12.29.17.04.05.11.17.09.33-.03.24-.26.42-.5.38-3.38-.49-7.86,1.13-10.23,2.13-.35.15-.58.47-.61.85-.1,1.38-.11,2.22-.11,2.22,0,.25-.2.44-.45.44-.25,0-.45-.2-.45-.45,0-.11,0-.77.07-1.81.02-.28-.09-.56-.29-.76Z"
}

const TOP_NAV_LINKS = [
  { label:"Cards", destination:"" },
  { label:"Decks", destination:"" },
  { label:"Events", destination:"" },
  { label:"Guides", destination:"" }
];

const TABLE_SOMETHING = {
  columns: [
    {size:"2rem",styles:{padding:".8rem .2rem"}},
    {label:"Number", size:2},
    {label:"Name",size:4},
    {label:"Stage",size:2}
  ],
  rows: [
    
  ]
};

const COLUMN_LABELS = ["","Number","Card","Points"];
const ROWS = [
  [{
    type:"icon", d:ENERGY_ICONS.GRASS, classList:["back-green"], styles:{padding:".8rem .2rem",display:"flex",justifyContent:"center"}
  },{
    type:"text",text:"EP-001", styles:{fontSize:"1.125rem"}
  },"Imposter Oak's Revenge","★"],
  ["","002","Ivysaur","Stage 1"],
  ["","003","Venusaur","Stage 2"]
];

function App() {
  return (<>
    <TopNav pageName="Card Manager" navLinks={TOP_NAV_LINKS} />
    <FullPageContainer>
      <Decklist />
    </FullPageContainer>
  </>)
}

export default App
