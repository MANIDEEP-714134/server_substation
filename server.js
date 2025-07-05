require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const SensorData = require('./dataModel');

app.use(express.json()); // Middleware to parse JSON

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB error:', err));

app.post('/data', async (req, res) => {
  try {
    const data = new SensorData(req.body);
    await data.save();
    res.status(201).json({ message: 'Data saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// Get the latest sensor data
app.get('/data/latest', async (req, res) => {
  try {
    const latestData = await SensorData.findOne().sort({ timestamp: -1 });
    res.json(latestData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch latest data' });
  }
});


app.listen(process.env.PORT || 3000, () => {
  console.log(`🌐 Server started at http://localhost:${process.env.PORT}`);
});
