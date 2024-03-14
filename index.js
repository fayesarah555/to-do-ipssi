const express = require('express');
const app = express();
const toDoRoutes = require('./routes/toDoRoutes');
const cors = require('cors');

app.use(cors({ origin: '*' })); 
// Middleware
app.use(express.json());

// Routes
app.use('/todos', toDoRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
