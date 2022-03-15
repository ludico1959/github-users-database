import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/users.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  findUserByLogin(login: string) {
    const user = this.userRepository.findUserByLogin(login);

    if (user) {
      return user;
    } else {
      const addedUser = this.userRepository.addUser(login);

      if (!addedUser)
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
