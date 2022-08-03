import { Column, Entity } from 'typeorm';
import { BaseModel } from './base.model.js';
// import type { User } from './user.model.js';

@Entity('roles')
class Role extends BaseModel {
    @Column({
      nullable: false,
      length: 20,
    })
  public role!: string;

  // @OneToOne('User', 'role')
  // @JoinColumn()
  //   public user!: User;
}

export { Role };
