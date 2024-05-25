"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppEnvs = void 0;
const dotenv = require("dotenv");
dotenv.config();
class AppEnvs {
}
exports.AppEnvs = AppEnvs;
AppEnvs.STRING_CONNECTION_DB = process.env.STRING_CONNECTION_DB || '';
AppEnvs.PROJECT_ID = process.env.PROJECT_ID || 'm-services';
AppEnvs.X_API_KEY = process.env.X_API_KEY || 'dbb4b052-23b9-48c4-b885-9751d8be0dc5';
AppEnvs.AUTH_DB_MONGO = process.env.AUTH_DB_MONGO ||
    'mongodb+srv://admin_user:123%40%40123@cluster53780.itloahe.mongodb.net/sos_pets';
AppEnvs.SALT_HASH = parseInt(process.env.SALT_HASH) || 10;
AppEnvs.LIMIT = parseInt(process.env.LIMIT) || 3;
AppEnvs.SKIP = parseInt(process.env.SKIP) || 0;
//# sourceMappingURL=app-env.js.map