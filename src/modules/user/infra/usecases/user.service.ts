import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserById(id: number): string {
    return `This id ${id} is an user information from github`;
  }
}
