export interface Alien {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const Alien: React.ComponentType<Alien>;

export default Alien;