```javascript
const mongoose = require('mongoose');
const redis = require('redis');
const jwt = require('jsonwebtoken');
const express = require('express');
const server = express();

// MongoDB Connection
const db = mongoose.connect('mongodb://localhost:27017/subjugate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Redis Connection
const redisClient = redis.createClient();

redisClient.on('connect', function() {
  console.log('Connected to Redis...');
});

// JWT Secret
const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';

// Exporting shared dependencies
module.exports = {
  server,
  db,
  redisClient,
  jwtSecret,
};
```