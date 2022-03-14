import { Entity, Column, PrimaryColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity('repositories')
export class Repository {
  constructor() {
    this.id = randomUUID();
  }

  @PrimaryColumn()
  id!: string;

  @Column()
  node_id: string;

  @Column()
  name: string;

  @Column()
  full_name: string;

  @Column()
  description: string;

  @Column()
  html_url: string;
}
