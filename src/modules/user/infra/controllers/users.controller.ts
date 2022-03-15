import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { UserService } from '../usecases/users.service';

@Controller('/api/v1/users/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':login')
  @HttpCode(200)
  findUserByLogin(@Param('login') login: string) {
    return this.userService.findUserByLogin(login);
  }
}
