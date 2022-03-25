import { CreateUserDTO } from '../dto/CreateUser.dto';
import { User } from '../infra/typeorm/entities/user.entity';

export interface IUsersRepository {
  create(data: CreateUserDTO): Promise<User>;
  listByUsername(username: string): Promise<User[]>;
}
