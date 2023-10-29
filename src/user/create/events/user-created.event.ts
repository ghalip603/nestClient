export interface UserCreatedEventParams {
  name: string;
}

export class UserCreatedEvent {
  constructor(public readonly params: { name: string }) {}
}
