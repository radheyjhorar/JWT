
const express = require('express');
const app = express();
const authRoutes = require('./src/routes/auth')
const protectedRoute = require('./src/routes/protectedRoute')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors');

dotenv.config();
const PORT = process.env.Port || 4545;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log('Connected to MongoDB');
} catch (error) {
  console.error("Error", error);
}

app.use(express.json())
app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
