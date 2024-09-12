const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
const authRoutes = require('./routes/AuthRoutes');


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});
app.use(express.json());

app.use('/auth', authRoutes);


app.use(express.urlencoded({ extended: true }));

console.log('Before database sync');

(async () => {
  try {
    await db.sequelize.sync({ force: true });
    console.log('connected to database');
  } catch (error) {
    console.error('Failed to connect to database:', error);
  }
})();

console.log('Before app.listen');

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});