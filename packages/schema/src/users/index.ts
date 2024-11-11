import { field, option, variant } from '@dao-xyz/borsh';
import { v4 as uuid } from 'uuid';

export * from './settings';

export enum UserStatus {
  Online = 'Online',
  Offline = 'Offline',
  Busy = 'Busy',
  Away = 'Away',
  Invisible = 'Invisible',
}

export interface CreateUserProps {
  username: string;
  display_name?: string;
  profile_picture?: string;
  bio?: string;
  status?: UserStatus;
}

@variant(0)
export class User {
  @field({ type: 'string' })
  user_id: string;

  @field({ type: 'string' })
  username: string;

  @field({ type: option('string') })
  display_name?: string;

  @field({ type: option('string') })
  profile_picture?: string;

  @field({ type: option('string') })
  bio?: string;

  @field({ type: 'string' })
  status: UserStatus;

  @field({ type: 'string' })
  created_at: string;

  @field({ type: 'string' })
  updated_at: string;

  @field({ type: 'string' })
  last_seen: string;

  constructor(props: CreateUserProps) {
    this.user_id = uuid();
    this.username = props.username;
    this.display_name = props.display_name;
    this.status = props.status ?? UserStatus.Online;
    this.created_at = new Date().toISOString();
    this.updated_at = new Date().toISOString();
    this.last_seen = new Date().toISOString();
    this.profile_picture = props.profile_picture;
    this.bio = props.bio;
  }
}
