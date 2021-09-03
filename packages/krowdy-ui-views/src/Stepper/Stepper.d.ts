interface Step {
  _id: string;
  label: string;
}

export type StepperProps = {
  steps?: Step[];
  orientation?: string;
  activeIndex?: number;
  onChange?: Function;
  clickable?: boolean;
  isCompleted?: boolean;
  height?: number;
  spacing?: number;
  absolute?: boolean;
};

declare var Stepper: React.ComponentType<StepperProps>;

export default Stepper
