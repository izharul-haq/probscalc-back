import { Model, Property } from 'routing-controllers-openapi-extended';

@Model()
export class ResultResponse {
  @Property({ description: 'Result for P(X = x)', required: true })
  eq: number;

  @Property({ description: 'Result for P(X < x)', required: false })
  lt?: number;

  @Property({ description: 'Result for P(X \u2264 x)', required: false })
  leq?: number;

  @Property({ description: 'Result for P(X \u2265 x)', required: false })
  geq?: number;

  @Property({ description: 'Result for P(X > x)', required: false })
  gt?: number;
}
