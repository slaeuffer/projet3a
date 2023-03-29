import db from "../models/index.js";
const Company = db.company;

export function getCompanyById(req, res, next) {
    Company.findById(req.body.params.companyId , function(err, items){
        if (err) throw err;
        res.status(200).json(items);
    })
}

export function getAllCompanies(req, res, next) {
    Company.find({}, function(err, items){
      if (err) throw err;
      res.status(200).json(items);
    })
  }