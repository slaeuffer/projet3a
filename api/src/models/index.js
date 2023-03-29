import mongoose from 'mongoose';
import User from './user.model.js';
import Role from './role.model.js';
import Reservation from './reservation.model.js';
import Comment from './comment.model.js';
import Company from './company.model.js';
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = User;
db.role = Role;
db.reservation = Reservation;
db.comment = Comment;
db.company = Company;

db.ROLES = ["user", "admin", "moderator"];

export default db;