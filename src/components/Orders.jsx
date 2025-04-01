import { useEffect, useState } from "react";
import { fetchOrders } from "../api"; // Import the API function

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token"); // Get token if using authentication

  useEffect(() => {
    const getOrders = async () => {
      const data = await fetchOrders(token);
      setOrders(data);
    };

    getOrders();
  }, [token]);

  return (
    <div>
      <h2>My Orders</h2>
      <ul>
        {orders.length > 0 ? (
          orders.map((order) => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Status: {order.status}</p>
              <p>Total Amount: ${order.total_amount}</p>
            </li>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </ul>
    </div>
  );
};

export default Orders;
