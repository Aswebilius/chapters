import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/post.js';

const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());
app.use('/posts', postRoutes);

app.get(' / ', (req, res) => {
  res.send('Hello to Chapters API');
});

const CONNECTION_URL = 'mongodb+srv://Aswebilius:112990Ajs@cluster0.a3yp8.mongodb.net/celebrations?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL
).then(() =>
 app.listen(PORT, () =>
  console.log(`Server running on port: ${PORT}`)))
.catch(err => {
    console.log(err);
})

