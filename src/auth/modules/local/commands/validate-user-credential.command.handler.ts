import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { ValidateUserCredentialCommand } from './validate-user-credential.command';
import { UserEntity } from '../../../../user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@CommandHandler(ValidateUserCredentialCommand)
export class ValidateUserCredentialCommandHandler
  implements ICommandHandler<ValidateUserCredentialCommand>
{
  constructor(
    private readonly eventBus: EventBus,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async execute(command: ValidateUserCredentialCommand) {
    const { name, password } = command.params;

    const [user] = await this.userRepository.find({ where: { name } });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new BadRequestException('Invalid password');
    }
    return user;
  }
}
