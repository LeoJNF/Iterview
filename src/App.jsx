
import {useState} from 'react';
import Dashboard from './pages/Dashboard';
import Flashcards from './pages/Flashcards';
import Simulator from './pages/Simulator';
import Checklist from './pages/Checklist';

export default function App(){
 const [page,setPage]=useState('dashboard');
 return <div className='app'>
 <div className='side'>
 <h2>Entrevista Prep</h2>
 <button onClick={()=>setPage('dashboard')}>Dashboard</button>
 <button onClick={()=>setPage('flashcards')}>Flashcards</button>
 <button onClick={()=>setPage('simulator')}>Simulador</button>
 <button onClick={()=>setPage('checklist')}>Checklist</button>
 </div>
 <div className='main'>
 {page==='dashboard' && <Dashboard/>}
 {page==='flashcards' && <Flashcards/>}
 {page==='simulator' && <Simulator/>}
 {page==='checklist' && <Checklist/>}
 </div></div>
}
