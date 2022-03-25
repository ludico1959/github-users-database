import { Module } from '@nestjs/common';
import { UsersModule } from './user/user.module';

@Module({
  imports: [UsersModule],
})
export class ModulesModule {}
