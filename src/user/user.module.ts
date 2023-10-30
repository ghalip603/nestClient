import { Module } from '@nestjs/common';
import { UserCreateModule } from './modules/create/user-create.module';
import { UserEntitySubscriber } from './entities/user.entity.subscriber';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { UserSaga } from './sagas/user.saga';
import { UserShowModule } from './modules/show/user-show.module';
import { UserNotExistValidator } from './validators/user-not-exist.validator';
import { UserExistQueryHandler } from './queries/user-exist.query.handler';

@Module({
  imports: [
    UserCreateModule,
    TypeOrmModule.forFeature([UserEntity]),
    UserShowModule,
  ],
  exports: [TypeOrmModule],
  providers: [
    UserEntitySubscriber,
    UserSaga,
    UserNotExistValidator,
    UserExistQueryHandler,
  ],
})
export class UserModule {}
