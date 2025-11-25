// Imports:
import { Roles } from 'src/utility/common/roles-enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

// User Entity Definition:
@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn() // It indicates that this column is the primary key and its value will be automatically generated.
  id: number;
  @Column()
  name: string;
  @Column({
    unique: true,
  })
  email: string;
  @Column({
    select: false, // Exclude password from query results by default for security.
  })
  password: string;
  @Column({
    type: 'enum',
    enum: Roles,
    array: true,
    default: [Roles.USER],
  })
  roles: Roles[];
  @CreateDateColumn()
  createdAt: Timestamp;
  @UpdateDateColumn()
  updatedAt: Timestamp;
}
