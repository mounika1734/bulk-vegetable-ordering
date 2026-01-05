
import {useState} from 'react';
export default ()=>{const[d,setD]=useState({});
return <div>
<input onChange={e=>setD({...d,buyer_name:e.target.value})}/>
<input onChange={e=>setD({...d,product_name:e.target.value})}/>
<input onChange={e=>setD({...d,quantity:e.target.value})}/>
<input onChange={e=>setD({...d,address:e.target.value})}/>
<button onClick={()=>fetch('http://localhost:5000/order',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(d)}).then(r=>r.json()).then(a=>alert(a.orderId))}>Order</button>
</div>}
