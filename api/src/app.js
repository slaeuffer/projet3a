

import express, { json } from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { mongoose } from 'mongoose';
import { env } from '../environnement.js';
import db from './models/index.js';
import { userRoutes } from './routes/user.routes.js';
import { authRoutes } from './routes/auth.routes.js';

const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

mongoose.set('strictQuery', false);

const Role = db.role;

db.mongoose.connect('mongodb+srv://antoine:'+ env.mongoDb + '@cluster0.ytpkm5q.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à MongoDB réussie !');
    initial();
  })
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*');
   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
   next();
 });

 app.use(
  cookieSession({
    name: "antoine-session",
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true
  })
);

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

userRoutes(app);
authRoutes(app);

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

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}


export default app;