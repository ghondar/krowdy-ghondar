export interface StartUpRocket {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const StartUpRocket: React.ComponentType<StartUpRocket>;

export default StartUpRocket;