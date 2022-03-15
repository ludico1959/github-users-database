import { Module } from '@nestjs/common';
import { UserController } from './infra/controllers/users.controller';
import { UserService } from './infra/usecases/users.service';
import { UserRepository } from './infra/repositories/users.repository';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserRepository],
})
export class UsersModule {}
