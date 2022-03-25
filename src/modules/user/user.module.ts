import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { UsersController } from './infra/controllers/users.controller';
import { ListUserByUsernameService } from './usecases/ListUserByUsernameService/ListUserByUsernameService';
import { UsersRepository } from './infra/typeorm/repositories/UsersRepository';
import { User } from './infra/typeorm/entities/user.entity';
import { Repository } from './infra/typeorm/entities/repository.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Repository]), HttpModule],
  controllers: [UsersController],
  providers: [ListUserByUsernameService],
  exports: [
    {
      provide: 'UsersRepository',
      inject: [UsersRepository],
      useClass: UsersRepository,
    },
  ],
})
export class UsersModule {}
