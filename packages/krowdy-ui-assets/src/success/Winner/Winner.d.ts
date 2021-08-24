export interface Winner {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const Winner: React.ComponentType<Winner>;

export default Winner;