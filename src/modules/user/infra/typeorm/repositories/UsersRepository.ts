import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/modules/user/dto/CreateUser.dto';
import { IUsersRepository } from 'src/modules/user/repositories/IUsersRepository';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async listByUsername(username: string): Promise<User[]> {
    return await this.usersRepository.find({
      where: {
        login: username,
      },
    });
  }

  async create(user: CreateUserDTO): Promise<User> {
    const savedUser = this.usersRepository.create(user);

    return await this.usersRepository.save(savedUser);
  }
}
