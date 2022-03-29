/* eslint-disable import/no-extraneous-dependencies */
require('dotenv').config();

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const TARGET = process.env.VITE_SOAP_URL;

const app = express();

app.use(cors());
app.use('*', createProxyMiddleware({ target: TARGET, changeOrigin: true }));

const PORT = Number.parseInt(process.env.VITE_PROXY_URL.split(':')[2], 10);

app.listen(PORT, () => {
  console.log(`proxy is ready at localhost:${PORT}`);
});
