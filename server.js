
const express=require('express');
const sqlite3=require('sqlite3').verbose();
const cors=require('cors');
const app=express();
app.use(cors());app.use(express.json());
const db=new sqlite3.Database('database.db');
db.run(`CREATE TABLE IF NOT EXISTS products(id INTEGER PRIMARY KEY,name TEXT,price REAL)`);
db.run(`CREATE TABLE IF NOT EXISTS orders(id INTEGER PRIMARY KEY,buyer_name TEXT,product_name TEXT,quantity INTEGER,address TEXT,status TEXT DEFAULT 'Pending')`);
db.run("INSERT OR IGNORE INTO products(rowid,name,price) VALUES(1,'Tomato',20)");
db.run("INSERT OR IGNORE INTO products(rowid,name,price) VALUES(2,'Apple',50)");
app.get('/products',(req,res)=>db.all("SELECT * FROM products",[],(_,r)=>res.json(r)));
app.post('/order',(req,res)=>{
 const {buyer_name,product_name,quantity,address}=req.body;
 db.run("INSERT INTO orders(buyer_name,product_name,quantity,address) VALUES(?,?,?,?)",[buyer_name,product_name,quantity,address],function(){
  res.json({orderId:this.lastID});
 });
});
app.get('/order/:id',(req,res)=>db.get("SELECT * FROM orders WHERE id=?",[req.params.id],(_,r)=>res.json(r)));
app.get('/admin/orders',(req,res)=>db.all("SELECT * FROM orders",[],(_,r)=>res.json(r)));
app.put('/admin/order/:id',(req,res)=>{db.run("UPDATE orders SET status='Delivered' WHERE id=?",[req.params.id]);res.json({ok:true});});
app.listen(5000);
