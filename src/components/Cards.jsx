import React from 'react';
import Card from './Card';


export default function Cards({characters}) {

   return <div style={{display: 'flex',margin: 30}}>
   {characters.map(character => (
     <Card key={character.id} {...character} />
   ))}
 </div>
}
