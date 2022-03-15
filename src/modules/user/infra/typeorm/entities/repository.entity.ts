import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { randomUUID } from 'crypto';

@Entity()
export class Repository {
  constructor() {
    this.id = randomUUID();
  }

  @PrimaryGeneratedColumn('uuid')
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
