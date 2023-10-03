const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoute')
const port = 3000; // You can change the port as needed
const cors = require('cors')
app.use(cors());
app.use(express.json());
// Middleware for parsing JSON requests
const connectDb = require("./config/dbConnection")
const dotenv = require("dotenv").config()



// Define API routes by importing the userRoutes.js file

app.use('/api/users', userRoutes);
connectDb();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
