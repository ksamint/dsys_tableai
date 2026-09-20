/** 16px square checkbox; checked fills deep blue with a white check. */
export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
