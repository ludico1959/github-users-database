import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../usecases/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(Number(id));
  }
}
