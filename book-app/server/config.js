/** Common settings for auth-api app. */

const DB_URI = (process.env.NODE_ENV === "test")
  ? "postgresql:///book-app-test"
  : "postgresql:///book-app";

const SECRET_KEY = process.env.SECRET_KEY || "secret";

const BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR
};