import CreateUserDTO from 'src/modules/user/dto/CreateUser.dto';
import { EntityManager, EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@EntityRepository(User)
class UserRepository {
  private userRepository: Repository<User>;

  constructor(manager: EntityManager) {
    this.userRepository = manager.getRepository(User);
  }

  async create(user: CreateUserDTO): Promise<User> {
    const savedUser = this.userRepository.create(user);

    return await this.userRepository.save(savedUser);
  }
}

export { UserRepository };
