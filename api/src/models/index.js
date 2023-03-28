import mongoose from 'mongoose';
import User from './user.model.js';
import Role from './role.model.js';
import Reservation from './reservation.model.js';
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = User;
db.role = Role;
db.reservation = Reservation;

db.ROLES = ["user", "admin", "moderator"];

export default db;