import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Repository } from './repository.entity';

@Entity('user')
export class User {
  @Column()
  login: string;

  @PrimaryColumn()
  id: string;

  @Column()
  node_id: string;

  @Column()
  name: string;

  @Column()
  html_url: string;

  @Column()
  repos_url: string;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updated_at!: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  created_at!: Date;

  @Column()
  email: string;

  @OneToMany(() => Repository, (repository) => repository.user)
  repository: Repository;
}
