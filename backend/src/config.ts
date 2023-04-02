import { CorsOptions } from "cors";
import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;
export const TOKEN_SECRET = process.env.JWT_SECRET || "secret";
export const TOKEN_EXPIRATION = process.env.JWT_EXPIRATION || '1h';

const origin = process.env.ORIGIN || "http://localhost:5173";

export const corsOptions: CorsOptions = {
  origin: [origin],
  credentials: true,
};