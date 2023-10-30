import { IsNotEmpty, Length } from 'class-validator';
import { UserNotExist } from '../../../validators/user-not-exist.validator';

export class CreateUserDto {
  @IsNotEmpty({
    message: '请填写用户名',
  })
  @UserNotExist()
  name: string;

  @Length(6, 24, { message: '密码长度为6-24位' })
  @IsNotEmpty({ message: '请填写密码' })
  password: string;
}
