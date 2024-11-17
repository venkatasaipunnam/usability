/* eslint-disable */
const jwt = require('jsonwebtoken');
const { Router } = require('express');
const userData = require('../data/users');

const { cookieName, secret } = require('../config');

const authRoutes = Router();
const TWELVE_HOURS = 12 * 60 * 60 * 1000;

authRoutes.get('/current-user', (req, res) => {
  const cookie = req.cookies[cookieName];
  if (cookie) {
    try {
      const user = jwt.verify(cookie, secret, { algorithm: 'HS256' });
      res.json(userData.getUser(user.username));
    } catch (error) {
      res.json({});
    }
  } else {
    res.json({});
  }
});

authRoutes.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username && password === 'pass') {
    const user = { access: ['guest', 'Guest'].includes(username) ? '' : 'associate', username };
    console.log(secret);
    const newToken = jwt.sign(user, secret, { algorithm: 'HS256' });
    console.log(newToken);
    res.cookie(cookieName, newToken, { maxAge: TWELVE_HOURS, httpOnly: true });
    res.json(user);
  } else {
    const result = userData.validateLogin({ 'username': username, 'password': password });
    if (!result.success) {
      res.status(401).json({ error: 'Incorrect Username or Password.' });
    } else {
      const user = result.user;
      console.log(secret);
      const newToken = jwt.sign(user, secret, { algorithm: 'HS256' });
      console.log(newToken);
      res.cookie(cookieName, newToken, { maxAge: TWELVE_HOURS, httpOnly: true });
      res.json(user);
    }
  }
});

authRoutes.post('/createuser', (req, res) => {
  const user = req.body;
  console.log(user);
  const result = userData.createUser(user);
  if (!result.success) {
    res.status(400).json({ ...result });
  } else {
    console.log(secret);
    const newToken = jwt.sign(user, secret, { algorithm: 'HS256' });
    console.log(newToken);
    res.cookie(cookieName, newToken, { maxAge: TWELVE_HOURS, httpOnly: true });
    res.status(200).json({ success: true, message:'Successfully Signed Up'});
  }
});

authRoutes.post('/updateuser', (req, res) => {
  const user = req.body;
  console.log(user)
  const result = userData.editUser(user);
  if (!result.success) {
    res.status(400).json({ ...result });
  } else {
    res.status(200).json({ success: true, ...result });
  }
});

authRoutes.post('/logout', (req, res) => {
  res.cookie(cookieName, '', { maxAge: TWELVE_HOURS, httpOnly: true });
  res.send('Logged out');
});

module.exports = authRoutes;
