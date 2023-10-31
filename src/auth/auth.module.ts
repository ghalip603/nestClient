import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthLocalModule } from './modules/local/auth-local.module';

@Module({
  controllers: [AuthController],
  imports: [PassportModule, AuthLocalModule],
})
export class AuthModule {}
