
import {useEffect,useState} from 'react';
export default ()=>{const[p,setP]=useState([]);
useEffect(()=>{fetch('http://localhost:5000/products').then(r=>r.json()).then(setP);},[]);
return <div>{p.map(x=><p key={x.id}>{x.name}-{x.price}</p>)}</div>;}
