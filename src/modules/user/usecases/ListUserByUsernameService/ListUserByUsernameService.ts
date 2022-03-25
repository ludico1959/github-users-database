import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class ListUserByUsernameService {
  constructor(private httpService: HttpService) {}

  async execute(username: string): Promise<any> {
    const githubAPI = process.env.GITHUB_API;
    return this.httpService
      .get(`${githubAPI}/users/${username}`)
      .pipe(map((response) => response.data));
  }
}
