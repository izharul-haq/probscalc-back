import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import { Express } from 'express';
import { mainLoader } from './loaders/mainLoader';
import { env } from './env';
import logger from './logger';
import chalk from 'chalk';

const app = createExpressServer({
  controllers: [__dirname + '/controllers/*.ts'],
  middlewares: [__dirname + '/middlewares/*.ts'],
  cors: true,
}) as Express;

mainLoader(app)
  .then(() => {
    app.listen(env.port, () => {
      logger.info(`⭐ live on port ${chalk.bold.yellow(env.port)}`);
    });
  })
  .catch((error) => {
    logger.info(error.message);
  });
