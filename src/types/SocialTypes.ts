```typescript
export interface Guild {
  id: string;
  name: string;
  members: string[];
}

export interface ChatMessage {
  id: string;
  senderId: string;
  content: string;
  timestamp: Date;
  channel: 'public' | 'private' | 'guild';
}

export interface PostalMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
}

export interface SocialSchema {
  guilds: Guild[];
  chatMessages: ChatMessage[];
  postalMessages: PostalMessage[];
}
```