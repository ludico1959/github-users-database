import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'compasso1995',
      database: 'db_github_users',
      entities: ['src/modules/content/infra/typeorm/entities/*.ts'],
      migrations: ['src/shared/database/migrations/*.ts'],
      cli: {
        entitiesDir: 'src/modules/content/infra/typeorm/entities',
        migrationsDir: 'src/shared/database/migrations',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
