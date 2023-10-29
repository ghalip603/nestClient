import { forwardRef, Module } from '@nestjs/common';
import { UserShowController } from './controllers/user-show.controller';
import { GetUserQueryHandler } from './queries/get-user.query.handler';
import { UserModule } from '../user.module';

@Module({
  controllers: [UserShowController],
  providers: [GetUserQueryHandler],
  imports: [forwardRef(() => UserModule)],
})
export class UserShowModule {}
