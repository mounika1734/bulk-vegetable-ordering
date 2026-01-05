
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Products from './Products';import Order from './Order';import Track from './Track';import Admin from './Admin';
export default function App(){return(<BrowserRouter><Routes>
<Route path="/" element={<Products/>}/><Route path="/order" element={<Order/>}/><Route path="/track" element={<Track/>}/><Route path="/admin" element={<Admin/>}/>
</Routes></BrowserRouter>);}
