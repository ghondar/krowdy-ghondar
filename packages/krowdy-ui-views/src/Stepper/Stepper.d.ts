interface Step {
  _id: string;
  label: string;
  value: string | number;
}

export type StepperProps = {
  steps?: Step[];
  orientation?: string;
  activeIndex?: number;
  onChange?: Function;
  clickeable?: boolean;
  isCompleted?: boolean
};

declare var Stepper: React.ComponentType<StepperProps>;

export default Stepper
