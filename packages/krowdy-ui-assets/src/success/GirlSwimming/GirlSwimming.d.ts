export interface GirlSwimming {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const GirlSwimming: React.ComponentType<GirlSwimming>;

export default GirlSwimming;