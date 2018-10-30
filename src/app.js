'use strict';

// 3rd Party Resources
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Esoteric Resources
import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';
import apiRouter from './api/v1.js';

// Prepare the express app
const server = express();

// App Level MW
server.use(cors());
server.use(morgan('dev'));

server.use(express.json());
server.use(express.urlencoded({extended:true}));

// Routes
server.use(apiRouter);

// Catchalls
server.use(notFound);
server.use(errorHandler);

const start = (port) => {
  server.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = { server, start };

