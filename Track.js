
import {useState} from 'react';
export default ()=>{const[id,setId]=useState('');const[o,setO]=useState(null);
return <div><input onChange={e=>setId(e.target.value)}/>
<button onClick={()=>fetch('http://localhost:5000/order/'+id).then(r=>r.json()).then(setO)}>Track</button>
{o&&<p>{o.status}</p>}</div>}
