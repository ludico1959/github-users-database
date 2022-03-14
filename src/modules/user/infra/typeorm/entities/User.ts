import {
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { randomUUID } from 'crypto';
import { Repository } from './Repository';

@Entity('users')
export class User {
  constructor() {
    this.id = randomUUID();
  }

  @Column()
  login: string;

  @PrimaryColumn()
  id!: string;

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
