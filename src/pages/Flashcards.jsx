
import {useState} from 'react';
const cards=[
['SQL','SELECT, filtros e validação de registros'],
['API REST','GET POST PUT DELETE'],
['ITIL','Incidente, Problema e SLA'],
['Logs','Identificar erros e causa raiz']
];
export default function Flashcards(){
const[i,setI]=useState(0);
return <div className='card'>
<h2>{cards[i][0]}</h2>
<p>{cards[i][1]}</p>
<button onClick={()=>setI((i+1)%cards.length)}>Próximo</button>
</div>
}
