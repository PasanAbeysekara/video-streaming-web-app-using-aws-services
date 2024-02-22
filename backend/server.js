require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Require CORS

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // Replace with your React app's URL
}));


const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Could not connect to MongoDB:', err);
  }
}

connect();

app.get('/api/videos', async (req, res) => {
  try {
    const database = client.db("VideoHosting");
    const videos = database.collection("videosCollection");
    const query = {};
    const videoList = await videos.find(query).toArray();
    res.json(videoList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/videos', async (req, res) => {
  try {
    const database = client.db("VideoHosting");
    const videos = database.collection("videosCollection");
    const video = req.body;
    const result = await videos.insertOne(video);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGINT', async () => {
  await client.close();
  process.exit();
});

