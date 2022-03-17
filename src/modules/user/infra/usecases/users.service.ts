import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
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

  async getUserByUsername(username: string): Promise<any> {
    const githubAPI = process.env.GITHUB_API;
    return this.httpService
      .get(`${githubAPI}/users/${username}`)
      .pipe(map((response) => response.data));
  }
}
