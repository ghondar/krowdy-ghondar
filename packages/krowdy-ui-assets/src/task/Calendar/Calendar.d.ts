export interface Calendar {
  width?: number;
  height?: number;
  color?: 'primary' | 'secondary' | 'custom' | string 
}

declare const Calendar: React.ComponentType<Calendar>;

export default Calendar;