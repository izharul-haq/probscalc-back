import logger from '@/logger';
import {
  ExpressErrorMiddlewareInterface,
  HttpError,
  Middleware,
} from 'routing-controllers';

@Middleware({ type: 'after' })
export class AllErrorHandler implements ExpressErrorMiddlewareInterface {
  error(
    error: HttpError,
    request: unknown,
    response: unknown,
    next: (err?: unknown) => unknown
  ): void {
    logger.error(error.message);
    next();
  }
}
