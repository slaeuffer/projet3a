import { getAllCompanies, getCompanyById } from "../controllers/company.controller.js";

export function companyRoutes(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  //SERVIRA POUR CREER DES NOUVELLES ENTEPRISES
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
  
  app.get('/api/company/:companyId', getCompanyById);
  
  app.get('/api/companies', getAllCompanies);
  
};
