# 🥕 Bulk Vegetable/Fruit Ordering Platform

A simple full-stack web application that allows buyers to browse vegetables/fruits, place bulk orders, and track order status. Admins can view all orders and update delivery status.

---

## 🚀 Tech Stack

**Frontend**
- React.js
- Axios
- React Router DOM

**Backend**
- Node.js
- Express.js

**Database**
- SQLite

**Deployment**
- Frontend: Vercel / Netlify
- Backend: Render

---

## ✨ Features

### 👨‍🌾 Buyer Features
- Browse available vegetables and fruits with price per unit
- Place bulk orders by providing:
  - Buyer name
  - Product name
  - Quantity
  - Delivery address
- Receive a unique **Order ID** after placing an order
- Track order status using Order ID

**Order Status Values**
- Pending
- Delivered



### 🛠 Admin Features
- View all placed orders
- See buyer name, product, quantity, address, and status
- Update order status from **Pending → Delivered**
- Admin access is available via a separate route (no authentication required)
  
**Frontend Setup**
    cd frontend
    npm install
    npm start

 **Backend Setup**
    cd backend
    npm install
    node server.js
