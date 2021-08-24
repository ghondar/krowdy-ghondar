export interface OnlyPresentation {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const OnlyPresentation: React.ComponentType<OnlyPresentation>;

export default OnlyPresentation;