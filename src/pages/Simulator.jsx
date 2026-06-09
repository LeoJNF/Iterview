
import {useState} from 'react';
const q=[
'Fale sobre você',
'Como utilizou SQL?',
'Explique um incidente analisando logs',
'Como prioriza chamados?',
'Por que devemos contratar você?'
];
export default function Simulator(){
const[i,setI]=useState(0);
return <div className='card'>
<h2>Simulador</h2>
<h3>{q[i]}</h3>
<button onClick={()=>setI((i+1)%q.length)}>Nova Pergunta</button>
</div>
}
