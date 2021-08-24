export interface DataOrganization {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const DataOrganization: React.ComponentType<DataOrganization>;

export default DataOrganization;