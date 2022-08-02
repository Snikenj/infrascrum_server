import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from './base.model.js';
import type { Task } from './task.model.js';

@Entity('checklists')
class Checklist extends BaseModel {
    @Column({
      nullable: false,
      length: 30,
    })
  public title!: string;

    @Column()
    public status!: boolean;

    @ManyToOne('Task', 'checklists')
    @JoinColumn()
    public task?: Task;
}

export { Checklist };
