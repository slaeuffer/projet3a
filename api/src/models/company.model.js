import { model, Schema } from "mongoose";


const Company = model(
    "Company",
    new Schema({
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
    })
  );

export default Company;