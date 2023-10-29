import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './create-user.command';
import { UserCreatedEvent } from '../events/user-created.event';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: CreateUserCommand) {
    const { name, password } = command.params;
    this.eventBus.publish(new UserCreatedEvent({ name }));
    return `create user name: ${name} and password: ${password}`;
  }
}
