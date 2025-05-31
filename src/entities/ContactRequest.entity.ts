import { Entity, PrimaryKey, Property, ManyToOne, Filter } from '@mikro-orm/core';
import { User } from './User.entity';

@Filter({
  name: 'canViewContactRequest',
  cond: args => ({
    $or: [
      { requester: args.userId },
      { recipient: args.userId }
    ]
  }),
  args: false
})
@Entity()
export class ContactRequest {
  @PrimaryKey({ type: 'uuid' })
  id!: string;

  @ManyToOne(() => User)
  requester!: User; // Quien envía la solicitud

  @ManyToOne(() => User)
  recipient!: User; // Quien recibe la solicitud

  @Property()
  status!: 'pending' | 'accepted' | 'rejected';

  @Property()
  createdAt = new Date();
}
