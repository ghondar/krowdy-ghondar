export interface SendingEmails {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string;
}

declare const SendingEmails: React.ComponentType<SendingEmails>;


export default SendingEmails;