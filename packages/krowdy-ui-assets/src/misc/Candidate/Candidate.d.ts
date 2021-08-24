export interface Candidate {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const Candidate: React.ComponentType<Candidate>;

export default Candidate;