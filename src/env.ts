import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({
  path: path.join(process.cwd(), `.env`),
});

export const env = {
  port: process.env.PORT,
};
