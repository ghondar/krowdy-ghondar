export interface Success {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const Success: React.ComponentType<Success>;

export default Success;