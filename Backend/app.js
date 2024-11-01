import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import login from './Routers/login';

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://buddanavaraprasad:MVdDKXcTAc5IMdH4@cluster0.ci86jca.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB', err);
});


app.listen(5000, () => {
    console.log("Connected to Database & Listening to localhost 3001");
}
)

app.use('/', login)


app.use('/', (req, res, next) => {
    res.send('Hi, Dude');
});