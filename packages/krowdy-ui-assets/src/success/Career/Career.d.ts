export interface Career {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const Career: React.ComponentType<Career>;

export default Career;