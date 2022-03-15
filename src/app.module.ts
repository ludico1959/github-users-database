import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user/user.module';

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
      migrations: ['dist/shared/database/migrations/*.js'],
      cli: {
        entitiesDir: 'dist/modules/user/infra/typeorm/entities',
        migrationsDir: 'dist/shared/database/migrations',
      },
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
