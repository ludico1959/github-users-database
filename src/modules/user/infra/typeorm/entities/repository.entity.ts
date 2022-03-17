import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Repository {
  @PrimaryGeneratedColumn()
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
