export interface UnderConstruction {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const UnderConstruction: React.ComponentType<UnderConstruction>;

export default UnderConstruction;