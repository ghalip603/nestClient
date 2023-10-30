import { EventBus, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserExistQuery } from './user-exist.query';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@QueryHandler(UserExistQuery)
export class UserExistQueryHandler implements IQueryHandler<UserExistQuery> {
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(query: UserExistQuery) {
    const { name } = query.params;

    const result = await this.userRepository.find({
      where: { name },
      select: ['id'],
    });
    return result.length > 0;
  }
}
