import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ListUserByUsernameService } from '../../usecases/ListUserByUsernameService/ListUserByUsernameService';

@Controller('/api/v1/users/')
export class UsersController {
  constructor(
    private readonly listUsersByUsernameService: ListUserByUsernameService,
  ) {}

  @Get(':login')
  @HttpCode(200)
  getUserByUsername(@Param('login') login: string): any {
    return this.listUsersByUsernameService.execute(login);
  }
}
