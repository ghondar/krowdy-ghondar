export interface PersonalData {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const PersonalData: React.ComponentType<PersonalData>;

export default PersonalData;