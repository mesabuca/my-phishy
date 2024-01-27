const express = require('express');
const healthCheckRoutes = require('./routes/healthCheckRoutes');
const targetsRoutes = require('./routes/targetsRoutes');
const campaignsRoutes = require('./routes/campaignsRoutes');
const redis = require('redis');

const env = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use('/healthCheck', healthCheckRoutes);
app.use('/targets', targetsRoutes);
app.use('/campaigns', campaignsRoutes);

app.get('/', (req, res) => {
  res.send('Ana Sayfa');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});