export interface StartUp {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const StartUp: React.ComponentType<StartUp>;

export default StartUp;