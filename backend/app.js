const express = require('express');
const app = express();
const path = require('path');
const db = require('./models');
const authRoutes = require('./routes/AuthRoutes');
const itemsRoutes = require('./routes/ItemsRoutes');
const orderRoutes=require('./routes/OrdersRoutes');
const multer = require('multer');
const employeeRoutes = require('./routes/EmployeesRoutes');
const cors = require('cors'); 
const auth=require('./middleware/is-auth');


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

app.use(cors()); 
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
app.use('/employees', auth, employeeRoutes);
app.use('/orders',  orderRoutes);



(async () => {
  try {
    await db.sequelize.sync({ force: false });
  } catch (error) {
  }
})();


app.listen(8080, () => {

});