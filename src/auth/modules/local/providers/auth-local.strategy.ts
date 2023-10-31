import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { CommandBus } from '@nestjs/cqrs';
import { ValidateUserCredentialCommand } from '../commands/validate-user-credential.command';

@Injectable()
export class AuthLocalStrategy extends PassportStrategy(
  Strategy,
  'auth-local',
) {
  constructor(private readonly commandBus: CommandBus) {
    super({ usernameField: 'name' });
  }

  validate(name: string, password: string) {
    return this.commandBus.execute(
      new ValidateUserCredentialCommand({ name, password }),
    );
  }
}
