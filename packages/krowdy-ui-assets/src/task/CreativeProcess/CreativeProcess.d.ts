export interface CreativeProcess {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const CreativeProcess: React.ComponentType<CreativeProcess>;

export default CreativeProcess;