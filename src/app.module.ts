import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './modules/user/infra/controllers/user.controller';
import { UserService } from './modules/user/infra/usecases/user.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'compasso1995',
      database: 'db_github_users',
      entities: ['dist/modules/user/infra/typeorm/entities/*.js'],
      migrations: ['dist/shared/database/migrations/*.ts'],
      cli: {
        entitiesDir: 'dist/modules/user/infra/typeorm/entities',
        migrationsDir: 'dist/shared/database/migrations',
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
