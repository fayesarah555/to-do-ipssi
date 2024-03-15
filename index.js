const express = require('express');
const app = express();
const toDoRoutes = require('./routes/toDoRoutes');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors({ origin: '*' })); 
// Middleware
app.use(express.json());
app.use(bodyParser.json());
// Routes
app.use('/todos', toDoRoutes);
app.use('/user', userRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
