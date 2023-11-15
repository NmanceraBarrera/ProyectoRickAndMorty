import React from 'react';
import Card from './Card';


export default function Cards({characters, onClose}) {

   return <div style={{display: 'flex',marginLeft: 30,flexWrap:'wrap'}}>
   {characters.map(character => (
     <Card key={character.id} {...character} onClose={onClose} />
   ))}
   
 </div>
}
