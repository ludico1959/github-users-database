import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user/user.module';
import config from 'src/shared/infra/typeorm/ormconfig';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(config)],
  controllers: [],
  providers: [],
})
export class AppModule {}
