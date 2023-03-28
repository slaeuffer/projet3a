import { model, Schema } from "mongoose";

const Reservation = model(
  "Reservation",
  new Schema({
    companyId: String,
    hour: String,
    date: String,
    userId: String
  })
);

export default Reservation;