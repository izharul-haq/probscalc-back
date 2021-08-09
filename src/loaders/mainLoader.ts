import logger from '@/logger';
import chalk from 'chalk';
import { Express } from 'express';
import { morganLoader } from './morganLoader';
import { redocLoader } from './redocLoader';

export const mainLoader = async (app: Express): Promise<void> => {
  try {
    await morganLoader(app);
    logger.info(`✔️  ${chalk.bold.green('morgan')} loaded successfully`);

    await redocLoader(app);
    logger.info(`✔️  ${chalk.bold.green('redoc')} loaded successfully`);
  } catch (error) {
    logger.info(`❌  failed to load ${chalk.red(error)}`);
  }
};
