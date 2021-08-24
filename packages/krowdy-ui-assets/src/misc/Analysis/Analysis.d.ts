export interface SentMessages {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const SentMessages: React.ComponentType<SentMessages>;

export default SentMessages;