import { Entity, Column, PrimaryColumn, OneToOne, JoinColumn } from 'typeorm';
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

  @Column()
  updated_at!: Date;

  @Column()
  created_at!: Date;

  @Column()
  email: string;

  @OneToOne(() => Repository)
  @JoinColumn()
  repository: Repository;
}
