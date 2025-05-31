import { Entity, PrimaryKey, Property, ManyToOne, Filter } from '@mikro-orm/core';
import { User } from './User.entity';
import { Group } from './Group.entity';

@Filter({
  name: 'canViewGroupInvitation',
  cond: args => ({
    $or: [
      { recipient: args.userId },
      { group: { admin: args.userId } }
    ]
  }),
  args: false
})
@Entity()
export class GroupInvitation {
  @PrimaryKey({ type: 'uuid' })
  id!: string;

  @ManyToOne(() => User)
  sender!: User; // Quien invita o solicita

  @ManyToOne(() => User)
  recipient!: User; // Quien es invitado o quien debe aprobar la solicitud

  @ManyToOne(() => Group)
  group!: Group;

  @Property()
  type!: 'invite' | 'request'; // Invitación o solicitud de unirse

  @Property()
  status!: 'pending' | 'accepted' | 'rejected';

  @Property()
  createdAt = new Date();
}

