export interface CustomerService {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const CustomerService: React.ComponentType<CustomerService>;

export default CustomerService;