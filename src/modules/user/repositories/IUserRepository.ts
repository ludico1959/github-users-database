import User from '../interface/user.interface';

export interface IUserRepository {
  create(): Promise<User>;
}
