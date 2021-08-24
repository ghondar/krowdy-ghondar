export interface JobInterview {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const JobInterview: React.ComponentType<JobInterview>;

export default JobInterview;