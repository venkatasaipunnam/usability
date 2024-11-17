/* eslint-disable */
import axios from 'axios';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemType from '../../types/item';
import { toast } from 'react-toastify';
import './Orders.css';
import { useCurrentUserContext } from '../../contexts/CurrentUserContext';
import ToastContainer from '../notifications/ToastContainer';

function Orders({ items }) {
  const [orders, setOrders] = useState([]);
  const { currentUser } = useCurrentUserContext();

  useEffect(() => {
    const getOrder = async () => {
      try {
        const results = await axios.get('api/orders/');
        setOrders(results?.data);
      } catch (error) {
        console.error(error);
      }
    };
    getOrder();
  }, []);

  const deleteOrder = async (order) => {
    try {
      const result = await axios.delete(`api/orders/${order.id}`);
      console.log(result)
      if (result?.data) {
        toast.success(result?.data?.message);
        setOrders(orders.filter((ord) => ord.id !== order.id));
      }
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  return (
    <div className="orders-component">
      <h2>Existing Orders</h2>
      {orders.length === 0
        ? (
          <div>
            {(currentUser.access === 'associate' || currentUser.access === 'Admin' || currentUser.access === 'Supervisor' || currentUser.access === 'Customer')
              ? 'No Orders'
              : 'Access Denied'}
          </div>
        )
        : orders.map((order) => (
          <div className="order" key={order.id}>
            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>ZIP Code</th>
                  {order.phone && <th>Phone</th>}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{order.name}</td>
                  <td>{order.zipCode}</td>
                  {order.phone && <td>{order.phone}</td>}
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Item</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.itemId}>
                    <td>{item.quantity}</td>
                    <Link
                      className="thumbnail-component"
                      to={`/department/category/product/${item.itemId}`}
                    >
                      <td>{items.find((i) => i.Id === item.itemId)?.title}</td>
                    </Link>
                    {/* <td>{items.find((i) => i.Id === item.itemId)?.title}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              type="button"
              onClick={() => deleteOrder(order)}
            >
              Delete Order
            </button>
          </div>
        ))}
        <ToastContainer />
    </div>
  );
}

Orders.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Orders;
