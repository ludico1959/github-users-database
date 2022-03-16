import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { UsersService } from '../usecases/users.service';

@Controller('/api/v1/users/')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':login')
  @HttpCode(200)
  findByLogin(@Param('login') login: string) {
    return this.userService.findByLogin(login);
  }
}
