import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('repository')
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

  @Column()
  user_id: string;

  @ManyToOne(() => User, (user) => user.repository)
  @JoinColumn({
    name: 'user_id',
  })
  user: User;
}
