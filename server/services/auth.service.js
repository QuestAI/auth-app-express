'use strict';
import bcrypt from 'bcryptjs';
import dbConnection from '../db/index.js';
const SALT_ROUNDS = 10;

const signup = async ({ email, password }) => {
  const hashed = await bcrypt.hash(password, SALT_ROUNDS);

  const newUser = {
    email,
    password: hashed,
  };

  await dbConnection.read();
  const user = await findUser({ email });
  if (user) {
    throw new Error('The user already exists');
  }
  console.log('Saving new user...', newUser);
  dbConnection.data.users.push(newUser);
  await dbConnection.write();
  return newUser;
};

const login = async ({ email, password }) => {
  const user = await findUser({ email });

  if (!user) {
    return false;
  }

  return bcrypt.compare(password, user.password);
};

const findUser = async ({ email }) => {
  if (!email) {
    throw new Error('Email was not provided');
  }

  await dbConnection.read();
  return dbConnection.data.users.find((user) => user.email === email);
};

const getAllUsers = async () => {
  await dbConnection.read();
  return dbConnection.data.users;
};

export default { signup, login, getAllUsers };
