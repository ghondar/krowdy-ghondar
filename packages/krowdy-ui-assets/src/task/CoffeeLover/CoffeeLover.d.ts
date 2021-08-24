export interface CoffeeLover {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const CoffeeLover: React.ComponentType<CoffeeLover>;

export default CoffeeLover;