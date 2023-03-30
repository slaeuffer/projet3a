import db from "../models/index.js";
const Reservation = db.reservation;

export function addNewReservation(req, res) {
    const reservation = new Reservation({
        companyId: req.body.companyId,
        hour: req.body.hour,
        date: req.body.date,
        userId: "123456789"
    })

    reservation.save(function(err) {
        if (err) throw err
    })
    
}

export function getReservationByCompanyId(req, res) {
    Reservation.find({companyId: req.params.companyId} , function(err, items){
        if (err) throw err;
        res.status(200).json(items);
    })
}
