import { Model, Property } from 'routing-controllers-openapi-extended';

@Model()
export class ErrorResponse {
  @Property({ description: 'HTTP status code', required: true })
  httpCode: number;

  @Property({ description: 'Error message', required: true })
  message: string;
}
