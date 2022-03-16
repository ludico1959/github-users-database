import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { map } from 'rxjs';
import { Repository } from 'typeorm';
import User from '../../interface/user.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    private readonly httpService: HttpService,
  ) {}

  findByLogin(login: string) {
    const githubAPI = process.env.GITHUB_API;
    return this.httpService
      .get(`${githubAPI}/users/${login}`)
      .pipe(map((response) => response.data));

    // if (user) {
    //   return user;
    // } else {
    //   const addedUser = this.usersRepository.create();

    //   if (!addedUser)
    //     throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    // }
  }
}
