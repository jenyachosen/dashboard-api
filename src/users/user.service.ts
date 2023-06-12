import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { IUserService } from './user.service.interface';
import { User } from './user.entity';
import { inject, injectable } from 'inversify';
import { IConfigService } from '../config/config.service.interface';
import { TYPES } from '../types';

@injectable()
export class UserService implements IUserService {
  constructor(@inject(TYPES.ConfigService) private configService: IConfigService) {}
  async createUser({ email, name, password }: UserRegisterDto): Promise<User | null> {
    const newUser = new User(email, name);
    const salt = this.configService.get('SALT');
    console.log({salt});
    await newUser.setPassword(password, Number(salt));
    // check if User exist
    // if exist return null
    // if not exist then create new one
    return null;
  }

  async validateUser(dto: UserLoginDto): Promise<boolean> {
    return true;
  }
}
