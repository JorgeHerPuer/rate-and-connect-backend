import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', default: null, nullable: true })
  description: string | null;

  @Column({ type: 'string', length: 300 })
  original_title: string;

  @Column({ type: 'string', default: null, nullable: true })
  cover_picture_url: string | null;

  @CreateDateColumn({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @DeleteDateColumn({ type: 'datetime', default: null, nullable: true })
  deleted_at: Date | null;
}
