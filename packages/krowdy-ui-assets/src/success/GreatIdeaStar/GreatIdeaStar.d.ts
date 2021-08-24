export interface GreatIdeaStar {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const GreatIdeaStar: React.ComponentType<GreatIdeaStar>;

export default GreatIdeaStar;