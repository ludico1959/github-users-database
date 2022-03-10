import { Entity, Column, PrimaryColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity('clients')
export class User {
  constructor() {
    this.id = randomUUID();
  }

  @PrimaryColumn()
  id: string;

  @Column()
  login: string;

  @Column()
  avatar_url: string;

  @Column()
  html_url: string;

  @Column()
  organizations_url: string;

  @Column()
  repos_url: string;

  age: number;
}
