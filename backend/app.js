const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
const authRoutes = require('./routes/AuthRoutes');
const itemsRoutes = require('./routes/ItemsRoutes');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer({ storage: storage, fileFilter: fileFilter }).single('image'));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/auth', authRoutes);
app.use('/items', itemsRoutes);

console.log('Before database sync');

(async () => {
  try {
    await db.sequelize.sync({ force: false });
    console.log('connected to database');
  } catch (error) {
    console.error('Failed to connect to database:', error);
  }
})();

console.log('Before app.listen');

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});