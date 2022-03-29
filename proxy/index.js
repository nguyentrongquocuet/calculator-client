const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('*', createProxyMiddleware({ target: 'http://localhost:1872', changeOrigin: true }));

app.listen(1874, () => {
  console.log('proxy is ready at localhost:1874');
});
