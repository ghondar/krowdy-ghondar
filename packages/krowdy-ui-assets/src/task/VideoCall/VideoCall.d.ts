export interface VideoCall {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const VideoCall: React.ComponentType<VideoCall>;

export default VideoCall;