import { Entity, PrimaryKey, Property, ManyToMany, ManyToOne, Collection } from '@mikro-orm/core';
import { User } from './User.entity';

@Entity()
export class Group {
  @PrimaryKey({ type: 'uuid' })
  id!: string;

  @Property()
  name!: string;

  @Property({ type: 'text' })
  description!: string;

  @ManyToMany(() => User, user => user.groups)
  users = new Collection<User>(this);

  @ManyToOne(() => User, 'groupsAdministred')
  admin!: User;

}
