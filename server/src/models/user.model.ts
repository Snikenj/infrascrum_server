import { BeforeInsert, Column, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne } from 'typeorm';
import { BaseModel } from './base.model.js';
import type { Comment } from './comment.model.js';
import type { Project } from './project.model.js';
import type { Role } from './role.model.js';
import { compare, hash } from 'bcrypt';

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
      unique: true,
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

    @BeforeInsert()
    async hashPassword () {
      const hashed = await hash(this.password, 10);
      this.password = hashed;
    }

    public verifyPassword (password: string): Promise<boolean> {
      return compare(password, this.password);
    }

    @OneToOne('Role', 'user')
    @JoinColumn()
    public role!: Role[];

    @ManyToMany('Project', 'users')
    public projects!: Project[];

    @OneToMany('Comment', 'user')
    public comments!: Comment;
}

export { User };
