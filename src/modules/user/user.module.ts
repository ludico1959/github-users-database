import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './infra/controllers/users.controller';
import { UsersService } from './usecases/CreateUser/CreateUser.service';
import { User } from './infra/typeorm/entities/user.entity';
import { HttpModule } from '@nestjs/axios';
import { Repository } from './infra/typeorm/entities/repository.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Repository]), HttpModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
