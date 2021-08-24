export interface SocialMedia {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const SocialMedia: React.ComponentType<SocialMedia>;

export default SocialMedia;