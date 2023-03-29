

import express, { json } from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { mongoose } from 'mongoose';
import { env } from '../environnement.js';
import db from './models/index.js';
import { userRoutes } from './routes/user.routes.js';
import { authRoutes } from './routes/auth.routes.js';
import { reservationRoutes } from './routes/reservation.routes.js';
import { commentRoutes } from './routes/comment.routes.js';
import { companyRoutes } from './routes/company.routes.js';

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

userRoutes(app);
authRoutes(app);
reservationRoutes(app);
commentRoutes(app);
companyRoutes(app);

app.get('/api/revenuePerPeriod', (req, res, next) => {
  
})

app.get('/api/StatsFieldsReservatedPerPeriod', (req, res, next) => {
  
})

app.get('/api/users/:userId', (req, res, next) => {
  
})

app.get('/api/orga/users/:orgaId', (req, res, next) => {
  
})

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