import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './base.model.js';
import type { Project } from './project.model.js';
import type { Task } from './task.model.js';

@Entity('elements')
class Element extends BaseModel {
    @Column({
      nullable: false,
      length: 20,
    })
  public nameElement!: string;

    @Column()
    public colorElement!: string;

  @ManyToOne('Project', 'elements')
  @JoinColumn()
    public project?: Project;

  @OneToMany('Task', 'element')
  public tasks?: Task;
}

export { Element };
