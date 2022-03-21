import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { UsersService } from '../../usecases/CreateUser/CreateUser.service';

@Controller('/api/v1/users/')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':login')
  @HttpCode(200)
  getUserByUsername(@Param('login') login: string): any {
    return this.userService.getUserByUsername(login);
  }
}
