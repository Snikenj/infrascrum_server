import { Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { BaseModel } from './base.model.js';
import type { Comment } from './comment.model.js';
import type { Project } from './project.model.js';
import type { Role } from './role.model.js';

@Entity('users')
class User extends BaseModel {
    @Column({
      nullable: false,
      length: 60,
      unique: true,
    })
  public email!: string;

    @Column({
      nullable: false,
      length: 1024,
      select: false,
    })
    public password!:string;

    @Column({
      nullable: false,
      length: 20,
    })
    public username!:string;

    @Column({
      nullable: true,
      length: 40,
    })
    public firstname?:string;

    @Column({
      nullable: true,
      length: 40,
    })
    public lastname?:string;

    @Column()
    public image?:string;

    @OneToOne('Role', 'user')
    @JoinColumn()
    public role!: Role[];

    @ManyToMany('Project', 'users')
    public projects!: Project[];

    @OneToMany('Comment', 'user')
    public comments!: Comment;
}

export { User };
