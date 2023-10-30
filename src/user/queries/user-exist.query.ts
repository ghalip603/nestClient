import { IQueryHandler, QueryHandler, EventBus } from '@nestjs/cqrs';

export interface UserExistQueryParams {
  
}

export class UserExistQuery {
  constructor(public readonly params: UserExistQueryParams) {}
}

@QueryHandler(UserExistQuery)
export class UserExistQueryHandler implements IQueryHandler<UserExistQuery> {
  constructor(private readonly eventBus: EventBus) {}

  async execute(query: UserExistQuery) {
    return query;
  }
}
