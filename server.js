const express = require('express');
const connectDB = require('./config/db');

// Init Express
const app = express();

// Connect to database
connectDB();

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Simple example route
// app.get('/', (req, res) => {
//   res.send('API Running');
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started and listening on PORT ${PORT}`),
);
