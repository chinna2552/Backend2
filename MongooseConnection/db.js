const mongoose = require('mongoose');

// Connection URL with the database name
const MONGODB_URI = 'mongodb://localhost:27017/Test';

// Connect to MongoD
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection status
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));
db.once('open', () => {
  
  console.log('Connected to Database :: MongoDB');
});

// Export the connection
module.exports = db;
