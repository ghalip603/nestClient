import { CommandHandler, ICommandHandler, EventBus } from '@nestjs/cqrs';

export interface ValidateUserCredentialCommandParams {
  
}

export class ValidateUserCredentialCommand {
  constructor(public readonly params: ValidateUserCredentialCommandParams) {}
}

@CommandHandler(ValidateUserCredentialCommand)
export class ValidateUserCredentialCommandHandler
  implements ICommandHandler<ValidateUserCredentialCommand>
{
  constructor(private readonly eventBus: EventBus) {}

  async execute(command: ValidateUserCredentialCommand) {
    return command;
  }
}
