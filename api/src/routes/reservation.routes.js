import { addNewReservation } from "../controllers/reservation.controller.js";

export function reservationRoutes(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/reservation/add", addNewReservation);

};