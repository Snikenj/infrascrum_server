import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseModel } from './base.model.js';
import type { Element } from './element.model.js';
import type { User } from './user.model.js';

@Entity('projects')
class Project extends BaseModel {
    @Column({
      nullable: false,
      length: 50,
      unique: true,
    })
  public projectName!: string;

    @Column()
    public startDate!: Date;

    @Column()
    public finishDate!: Date;

    @Column()
    public description?: string;

    @Column()
    public image?: string;

    @ManyToMany('User', 'projects')
    @JoinTable()
    public users?: User[];

  @OneToMany('Element', 'project')
    public elements?: Element[];
}

export { Project };
