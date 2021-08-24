export interface Coding {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const Coding: React.ComponentType<Coding>;

export default Coding;