import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(process.env.SETTINGS_DATABASE);

const db = mongoose.connection;

export default db;