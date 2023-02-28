

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

 const companySchema = mongoose.Schema({
  id: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  isDeleted: {
    type: String,
    required: true
  },
  pictures: {
    type: Array,
    required: false
  },
  employees: {
    type: Array,
    required: false
  },
  rating: {
    type: Number,
    required: false
  },
  reviews: {
    type: Array,
    required: false
  }
});

const Company = mongoose.model('Company', companySchema);

app.post('/api/companies', function(req, res){
  const company = new Company({
    "id": req.body.id ? req.body.id : 123,
    "name": req.body.name, 
    "address": req.body.address,
    "isDeleted": req.body.isDeleted,
    "rating": req.body.rating,
    // "reviews": req.body.reviews,
  });
  company.save( function(err) {
    if (err) throw err
  });
});

app.get('/api/company/:companyId', (req, res, next) => {
  Company.findById(req.body.params.companyId , function(err, items){
    if (err) throw err;
    res.status(200).json(items);
  })
 })

app.get('/api/companies', (req, res, next) => {
  Company.find({}, function(err, items){
    if (err) throw err;
    res.status(200).json(items);
  })
})

app.post('/api/companies', function(req, res){
  const company = new Company({
    "title": req.body.title, 
    "author": req.body.author, 
    "genre": req.body.genre,
    "description": req.body.description,
    "likes": 0,
    "dislikes": 0,
    "imageUrl": "https://material.angular.io/assets/img/examples/shiba2.jpg"
  });
  company.save( function(err) {
    if (err) throw err
  });
});

app.get('/api/revenuePerPeriod', (req, res, next) => {
  
})

app.get('/api/StatsFieldsReservatedPerPeriod', (req, res, next) => {
  
})

app.get('/api/users/:userId', (req, res, next) => {
  
})

app.get('/api/orga/users/:orgaId', (req, res, next) => {
  
})

app.put('/api/company/postComment', function(req, res){
  const company = new Company({
    "title": req.body.title, 
    "author": req.body.author, 
    "genre": req.body.genre,
    "description": req.body.description,
    "likes": 0,
    "dislikes": 0,
    "imageUrl": "https://material.angular.io/assets/img/examples/shiba2.jpg"
  });
  company.save( function(err) {
    if (err) throw err
  });
});

export default app;