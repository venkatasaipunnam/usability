/* eslint-disable */
let users = [];
users.push({userId: 0, username: 'admin', password: 'Admin@123', firstname: 'Admin', lastname:'User', phonenumber: '9999999999', email:'onmartstoreadmin@onmart.com', access: 'Admin'})
users.push({userId: 1, username: 'supervisor', password: 'Super@123', firstname: 'Supervisor', lastname:'User', phonenumber: '9999999998', email:'onmartstoresupervisor@onmart.com', access: 'Supervisor'})
userId = 1;

const validateUserLogin = (login) => {
  if (!login) {
    return { error: 'Missing body', valid: false };
  }
  if (typeof login.username !== 'string' || !login.username.trim()) {
    return { error: 'Invalid User Name', valid: false };
  }
  if (typeof login.username !== 'string' || !login.password.trim()) {
    return { error: 'Invalid Password', valid: false };
  }
  return { valid: true };
};

const validateLogin = (login) => {
  const result = validateUserLogin(login);
  if (!result.valid) {
    return { success: false, ...result };
  }
  user = users.find((user) => user.username === login.username);
  if (!user){
    return { success: false, error: 'Invalid Username', valid: false };
  }
  if (user.password !== login.password){
    return { success: false, error: 'Invalid Password', valid: false };
  }
  return {success: true, user: user}
};

const validateCreateUser = (user) => {
  if (!user) {
    return { error: 'Missing body', valid: false };
  }
  if (typeof user.username !== 'string' || !user.username.trim()) {
    return { error: 'Invalid User Name', valid: false };
  }
  if (typeof user.password !== 'string' || !user.password.trim()) {
    return { error: 'Invalid Password', valid: false };
  }
  if (typeof user.firstname !== 'string' || !user.firstname.trim()) {
    return { error: 'Invalid First Name', valid: false };
  }
  if (typeof user.lastname !== 'string' || !user.lastname.trim()) {
    return { error: 'Invalid Last Name', valid: false };
  }
  if (typeof user.email !== 'string' || !user.email.trim()) {
    return { error: 'Invalid Email', valid: false };
  }
  if (typeof user.phonenumber !== 'string' || !user.phonenumber.trim()) {
    return { error: 'Invalid Phone number', valid: false };
  }
  if(users.find((u) => u.username === user.username)) {
    return { error: 'Username already taken', valid: false };
  }
  if(users.find((u) => u.email===user.email)){
    return { error: 'Email already exists, please try to login', valid: false };
  }
  return { valid: true };
};


const validateUpdateUser = (user) => {
  if (!user) {
    return { error: 'Missing body', valid: false };
  }
  if (typeof user.firstname !== 'string' || !user.firstname.trim()) {
    return { error: 'Invalid First Name', valid: false };
  }
  if (typeof user.lastname !== 'string' || !user.lastname.trim()) {
    return { error: 'Invalid Last Name', valid: false };
  }
  if (typeof user.email !== 'string' || !user.email.trim()) {
    return { error: 'Invalid Email', valid: false };
  }
  if (typeof user.phonenumber !== 'string' || !user.phonenumber.trim()) {
    return { error: 'Invalid Phone number', valid: false };
  }
  if(!users.find((u) => u.username === user.username)) {
    return { error: 'User not exists', valid: false };
  }
  return { valid: true };
};

const createUser = (user) => {
  const result = validateCreateUser(user);
  if (!result.valid) {
    return { success: false, ...result };
  }

  userId += 1;
  const newUser = {
    userId: userId,
    username: user.username,
    phonenumber: user.phonenumber,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password,
    access:'Customer'
  };
  users.push(newUser);

  return { success: true };
};

const editUser = (editedUser) => {
  const result = validateUpdateUser(editedUser);
  if (!result.valid) {
    return { success: false, ...result };
  }

  users = users.map((user) => (user.username === editedUser.username ? {
    ...user,
    username: editedUser.username,
    phonenumber: editedUser.phonenumber,
    firstname: editedUser.firstname,
    lastname: editedUser.lastname,
    email: editedUser.email,
    password: editedUser.password,
  } : user));

  console.log(users)

  return { success: true, user: users.find((user) => user.username === editedUser.username) };
};

const getUsers = () => users;

const getUser = (username) => users.find((user) => user.username === username);

module.exports = {
  createUser,
  editUser,
  getUsers,
  getUser,
  validateCreateUser,
  validateUserLogin,
  validateLogin,
  validateUpdateUser,
};
