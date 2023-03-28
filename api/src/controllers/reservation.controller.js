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
