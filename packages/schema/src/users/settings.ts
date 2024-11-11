import { field, variant } from '@dao-xyz/borsh';

export type Theme = 'dark' | 'light' | 'system';

export interface CreateUserSettingsProps {
  user_id: string;
  theme: Theme;
  language: string;
  timezone: string;
}

@variant(0)
export class UserSettings {
  @field({ type: 'string' })
  user_id: string;

  @field({ type: 'string' })
  theme: Theme;

  @field({ type: 'string' })
  language: string;

  @field({ type: 'string' })
  timezone: string;

  constructor(props: CreateUserSettingsProps) {
    this.user_id = props.user_id;
    this.theme = props.theme;
    this.language = props.language;
    this.timezone = props.timezone;
  }
}
