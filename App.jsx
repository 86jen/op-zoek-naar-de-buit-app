import { useState } from 'react'

export default function App() {
const opdrachten = [
{
titel:'1. Frietkraam',
hint:'Jullie missie start waar zout, saus en snacks samenkomen.',
opdracht:'Maak een foto alsof jullie een geheime deal sluiten.',
politie:'De politie heeft camerabeelden ontvangen van 5 jongens bij een snackbar.'
},
{
titel:'2. Kerkhof',
hint:'Zoek de plek waar stilte begint.',
opdracht:'Maak een foto alsof jullie een zombieaanval proberen te overleven.',
politie:'Spoedmelding: de politie heeft een signalement ontvangen.'
}
]

const [index,setIndex]=useState(0)
const [foto,setFoto]=useState(false)

const huidige = opdrachten[index]

return (
<div style={{background:'#000',minHeight:'100vh',padding:'20px',color:'white',fontFamily:'Arial'}}>
<h1 style={{color:'red'}}>OP ZOEK NAAR DE BUIT</h1>

<div style={{background:'#111',padding:'20px',borderRadius:'20px'}}>
<h2>{huidige.titel}</h2>

<p><b>Hint:</b> {huidige.hint}</p>
<p><b>Opdracht:</b> {huidige.opdracht}</p>

<div style={{background:'#300',padding:'15px',borderRadius:'12px'}}>
<b>POLITIEBERICHT</b>
<p>{huidige.politie}</p>
</div>

<input
type='file'
accept='image/*'
onChange={() => setFoto(true)}
style={{marginTop:'20px'}}
/>

{foto && (
<button
onClick={() => {
setIndex(index + 1)
setFoto(false)
}}
style={{
marginTop:'20px',
padding:'15px',
background:'red',
border:'none',
borderRadius:'12px',
color:'white'
}}
>
Volgende hint
</button>
)}
</div>
</div>
)
}
