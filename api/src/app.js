

import express, { json } from 'express';

const app = express();
import { mongoose } from 'mongoose';
import { env } from '../environnement.js';

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://antoine:'+ env.mongoDb + '@cluster0.ytpkm5q.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(json());

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

 const musicSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  dislikes: {
    type: Number,
    required: true
  },
  imageUrl : {
    type: String,
    required: true
  }
});

const Music = mongoose.model('Music', musicSchema);

app.get('/api/musics', (req, res, next) => {
  Music.find({}, function(err, items){
    if (err) throw err;
    res.status(200).json(items);
  })
 });

app.post('/api/newMusic', function(req, res){
  const music = new Music({
    "title": req.body.title, 
    "author": req.body.author, 
    "genre": req.body.genre,
    "description": req.body.description,
    "likes": 0,
    "dislikes": 0,
    "imageUrl": "https://material.angular.io/assets/img/examples/shiba2.jpg"
  });
  music.save( function(err) {
    if (err) throw err
  });
});

app.get('/api/company/:companyId', (req, res, next) => {
  Music.find({}, function(err, items){
    if (err) throw err;
    res.status(200).json(items);
  })
 })

app.get('/api/companies', (req, res, next) => {
  
})

app.get('/api/revenuePerPeriod', (req, res, next) => {
  
})

app.get('/api/StatsFieldsReservatedPerPeriod', (req, res, next) => {
  
})

app.get('/api/users/:userId', (req, res, next) => {
  
})

app.get('/api/orga/users/:orgaId', (req, res, next) => {
  
})

export default app;