import { Column, Entity, OneToOne } from 'typeorm';
import { BaseModel } from './base.model.js';
import type { Task } from './task.model.js';

@Entity('types')
class Type extends BaseModel {
    @Column({
      nullable: false,
      length: 20,
    })
  public type!: string;

  @OneToOne('Task', 'type')
    public task?: Task;
}

export { Type };
