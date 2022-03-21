import { HttpService } from '@nestjs/axios';
import { Inject, Injectable } from '@nestjs/common';
import { map } from 'rxjs';
import { IUserRepository } from '../../repositories/IUserRepository';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRepository')
    private readonly usersRepository: IUserRepository,

    private readonly httpService: HttpService,
  ) {}

  async getUserByUsername(username: string): Promise<any> {
    const githubAPI = process.env.GITHUB_API;
    return this.httpService
      .get(`${githubAPI}/users/${username}`)
      .pipe(map((response) => response.data));
  }
}
