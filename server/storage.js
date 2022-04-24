import { isArray } from 'util';

const fs = require('fs');

const storagePath = './storage';
const usersPath = `${storagePath}/users.json`;

const initialUsers = {
  developer: {
    username: 'developer',
    password: 'password',
  },
  test1:{
    username:"test1",
    password:"password"
  },
  test2:{
    username:"test2",
    password:"password"
  },
  test3:{
    username:"test3",
    password:"password"
  },
  test4:{
    username:"test4",
    password:"password"
  },
  test5:{
    username:"test5",
    password:"password"
  }
};

export function initStorage() {
  if (!fs.existsSync(storagePath)) fs.mkdirSync(storagePath);
  if (!fs.existsSync(usersPath)) setUsers(initialUsers);
}

export function getUser(username) {
  return getUsers()[username];
}

export function setUser(user) {
  const users = getUsers();
  users[user.username] = user;
  setUsers(users);
}

function getUsers() {
  let users;
  if (fs.existsSync(usersPath)) {
    users = JSON.parse(fs.readFileSync(usersPath).toString());
  }
  return users || {};
}

function setUsers(users) {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}
