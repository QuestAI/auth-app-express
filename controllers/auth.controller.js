'use strict';
import authService from '../services/auth.service.js';
const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw new Error('Email was not provided');
    }
    if (!password) {
      throw new Error('Password was not provided');
    }

    const newUser = await authService.signup({ email, password });

    console.log('Saving new user...', newUser);

    return res.status(201).send({ message: 'Signup Successfull' });
  } catch (error) {
    error.statusCode = 503;
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error('Email was not provided');
    }
    if (!password) {
      throw new Error('Password was not provided');
    }
    const user = await authService.login({ email, password });

    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }

    return res.status(200).send({ message: 'Logged in' });
  } catch (error) {
    error.statusCode = 503;
    next(error);
  }
};

export default { signup, login };
