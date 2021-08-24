export interface CheckingList {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const CheckingList: React.ComponentType<CheckingList>;

export default CheckingList;