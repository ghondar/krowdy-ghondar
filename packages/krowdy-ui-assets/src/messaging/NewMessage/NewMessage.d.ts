export interface NewMessage {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const NewMessage: React.ComponentType<NewMessage>;

export default NewMessage;