export interface FinancialAnalyst {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const FinancialAnalyst: React.ComponentType<FinancialAnalyst>;

export default FinancialAnalyst;