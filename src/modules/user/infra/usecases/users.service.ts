import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from '../../interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findUserByLogin(login: string) {
    const user = this.usersRepository.findOne(login);

    if (user) {
      return user;
    } else {
      const addedUser = this.usersRepository.create();

      if (!addedUser)
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }
}
