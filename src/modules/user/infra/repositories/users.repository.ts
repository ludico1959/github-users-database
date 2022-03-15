import { Injectable } from '@nestjs/common';
// import CreateUserDto from '../../dto/createUser.dto';
// import User from '../../interface/user.interface';

@Injectable()
export class UserRepository {
  findUserByLogin(login: string) {
    return `${login}`;
  }

  addUser(login: string) {
    return `${login} added to the database`;
  }
}
