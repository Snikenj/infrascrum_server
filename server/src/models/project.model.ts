import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './base.model.js';
import type { Element } from './element.model.js';
import type { User } from './user.model.js';

@Entity('projects')
class Project extends BaseModel {
  //   @Column({
  //     nullable: false,
  //   })
  // public admin!: number;

    @Column({
      nullable: false,
      length: 50,
      unique: true,
    })
  public projectName!: string;

    @Column()
    public startDate!: Date;

    @Column()
    public endDate!: Date;

    @Column()
    public description?: string;

    @Column()
    public image?: string;

    @ManyToMany('User', 'projects')
    @JoinTable()
    public users?: User[];

    @ManyToOne('User', 'projects_admins')
    public admin?: User[];

  @OneToMany('Element', 'project')
    public elements?: Element[];
}

export { Project };
