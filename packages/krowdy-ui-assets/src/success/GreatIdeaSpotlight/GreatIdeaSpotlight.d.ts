export interface GreatIdeaSpotlight {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const GreatIdeaSpotlight: React.ComponentType<GreatIdeaSpotlight>;

export default GreatIdeaSpotlight;