import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { BaseModel } from './base.model.js';
import type { Checklist } from './checklist.model.js';
import type { Comment } from './comment.model.js';
import type { Element } from './element.model.js';
import type { Type } from './type.model.js';

@Entity('tasks')
class Task extends BaseModel {
    @Column({
      nullable: false,
      length: 30,
      unique: false,
    })
  public title!: string;

    @Column({
      nullable: false,
      length: 150,
      select: false,
    })
    public description?:string;

    @Column()
    public status!: boolean;

    @Column()
    public time!: string;

    @Column()
    public color?: string;

    @ManyToOne('Element', 'tasks')
    public element?: Element;

    @OneToOne('Type', 'task')
    @JoinColumn()
    public type?: Type;

    @OneToMany('Checklist', 'task')
    public checklists?: Checklist;

    @ManyToOne('Comment', 'task')
    public comment?: Comment;
}

export { Task };
