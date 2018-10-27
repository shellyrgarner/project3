// import dotenv from 'dotenv';
// import path from 'path';
const dotenv = require("dotenv");
const path = require("path");

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: path.join(__dirname, '../env') });
}

// export const BCRYPT_SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 8;
// export const JWT_SECRET = process.env.JWT_SECRET || 'jwt-secret';
// export const NODE_ENV = process.env.NODE_ENV || 'development';
// export const PORT = process.env.PORT || 3001;

const BCRYPT_SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 8;
const JWT_SECRET = process.env.JWT_SECRET || 'jwt-secret';
const NODE_ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3001;

module.exports = {
    BCRYPT_SALT_ROUNDS,
    JWT_SECRET,
    NODE_ENV,
    PORT
};
