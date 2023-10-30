import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidatorOptions,
} from 'class-validator';
import { QueryBus } from '@nestjs/cqrs';
import { UserExistQuery } from '../queries/user-exist.query';

@Injectable()
@ValidatorConstraint({ async: true })
export class UserNotExistValidator implements ValidatorConstraintInterface {
  constructor(private readonly queryBus: QueryBus) {}

  async validate(value: string, args: ValidationArguments) {
    const result = await this.queryBus.execute(new UserExistQuery({ name:value }));
    return !result;
  }

  defaultMessage(args: ValidationArguments) {
    return '用户已存在';
  }
}

export const UserNotExist = (options?: ValidatorOptions) => {
  return (object: Object, propertyName: string) =>
    registerDecorator({
      target: object.constructor,
      propertyName,
      options,
      validator: UserNotExistValidator,
    });
};
