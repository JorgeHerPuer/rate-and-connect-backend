import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserStatus } from './enums/user-status.enum';
import { Gender } from './enums/gender-enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ type: 'string', length: 50 })
  username: string;

  @Column({ type: 'varchar', length: 128, select: false })
  encrypted_password: string;

  @Column({ type: 'string', length: 320 })
  email: string;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.PENDING_VERIFICATION,
  })
  status: UserStatus;

  @Column({ type: 'string', default: null, nullable: true })
  profile_picture_url: string | null;

  @Column({ type: 'string', default: null, nullable: true })
  location: string | null;

  @Column({ type: 'text', default: null, nullable: true })
  biography: string | null;

  @Column({ type: 'enum', enum: Gender, default: null, nullable: true })
  gender: Gender | null;

  @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @DeleteDateColumn({ type: 'datetime', default: null, nullable: true })
  deleted_at: Date | null;
}
