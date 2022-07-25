import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './base.model.js';
import type { Task } from './task.model.js';
import type { User } from './user.model.js';

@Entity('comments')
class Comment extends BaseModel {
    @Column({
      nullable: false,
      length: 150,
    })
  public comment!: string;

  @OneToMany('Task', 'comments')
    public task!: Task;

  @ManyToOne('User', 'comments')
  @JoinColumn()
  public user!: User;
}

export { Comment };
