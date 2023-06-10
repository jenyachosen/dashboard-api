import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
  @IsEmail({}, { message: 'Wrong email address' })
  email: string;

  @IsString({ message: 'Password is not presented' })
  password: string;

  @IsString({ message: 'Name is not presented' })
  name: string;
}
