/* eslint-disable */
const jwt = require('jsonwebtoken');
const { Router } = require('express');
const WebSocket = require('ws');

const authMiddleware = require('../middleware/authMiddleware');
const webSocketServer = require('../webSocketServer');
const orderData = require('../data/orders');

const { cookieName, secret } = require('../config');

const sendOrders = () => {
  webSocketServer.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(orderData.getOrders()));
    }
  });
};

webSocketServer.on('connection', (ws) => {
  ws.send(JSON.stringify(orderData.getOrders()));
});

const getUser = (req) => {
  const cookie = req.cookies[cookieName];
    let user
    if (cookie) {
      try {
        user = jwt.verify(cookie, secret, { algorithm: 'HS256' });
      } catch (error) {
        res.status(401).send({error});
      }
    } else {
      res.status(401).send({success: false, message:"UnAuthorised"});
    }
    return user;
}

const orderRoutes = Router();
orderRoutes.route('/')
  .post((req, res) => {
    const user = getUser(req);
    const order = req.body;
    const result = orderData.createOrder(order, user);
    if (!result.success) {
      res.status(400).send(result);
    } else {
      res.status(201).send();
      sendOrders();
    }
  })
  .delete((req, res) => {
    orderData.deleteOrders();
    res.send('deleted all orders');
    sendOrders();
  })
  .get((req, res) => {
    const user  = getUser(req);
    res.json(orderData.getOrders(user.username));
  });

// Routes for a single model
orderRoutes.route('/:id')
  .get((req, res) => {
    const user  = getUser(req);
    const order = orderData.getOrders(user.username).find(({ id }) => id === req.params.id);
    if (order) {
      res.json(order);
    } else {
      res.status(404).send('No order found');
    }
  })
  .put(authMiddleware, (req, res) => {
    const user = getUser(req);
    if (!orderData.getOrders(user.username).some(({ id }) => id === req.params.id)) {
      res.status(404).send();
    } else {
      const editedOrder = req.body;
      const result = orderData.editOrder(req.params.id, editedOrder);
      if (!result.success) {
        res.status(400).send(result);
      } else {
        res.json(result.order);
        sendOrders();
      }
    }
  })
  .delete(authMiddleware, (req, res) => {
    const user = getUser(req);
    if (!orderData.getOrders(user.username).some(({ id }) => id === req.params.id)) {
      res.status(404).json({ message: 'Unable to find the order '}).send();
    } else {
      orderData.deleteOrder(req.params.id);
      res.json({ message: `Successfully deleted order ${req.params.id}` });
      sendOrders();
    }
  });

module.exports = orderRoutes;
