require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./src/routes/userRoutes');
const moduleRoutes = require('./src/routes/moduleRoutes');
const timetableRoutes = require('./src/routes/timetableRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ DB Error:', err));

app.use('/api/users', userRoutes);
app.use('/api/modules', moduleRoutes);
app.use('/api/timetable', timetableRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Running on port ${PORT}`));