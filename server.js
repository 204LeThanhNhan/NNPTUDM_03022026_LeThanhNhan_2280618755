require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB
connectDB();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'User Management API' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
