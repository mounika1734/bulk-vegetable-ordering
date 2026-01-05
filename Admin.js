
import {useEffect,useState} from 'react';
export default ()=>{const[o,setO]=useState([]);
useEffect(()=>{fetch('http://localhost:5000/admin/orders').then(r=>r.json()).then(setO);},[]);
return <div>{o.map(x=><div key={x.id}>{x.product_name}-{x.status}<button onClick={()=>fetch('http://localhost:5000/admin/order/'+x.id,{method:'PUT'}).then(()=>window.location.reload())}>Deliver</button></div>)}</div>}
