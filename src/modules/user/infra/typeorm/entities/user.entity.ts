import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Repository } from './repository.entity';

@Entity()
export class User {
  @Column()
  login: string;

  @PrimaryGeneratedColumn()
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

  @OneToOne(() => Repository)
  @JoinColumn()
  repository: Repository;
}
