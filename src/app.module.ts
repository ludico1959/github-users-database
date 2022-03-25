import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/shared/infra/typeorm/ormconfig';
import { ModulesModule } from './modules/modules.module';

@Module({
  imports: [ModulesModule, TypeOrmModule.forRoot(config)],
  controllers: [],
  providers: [],
})
export class AppModule {}
