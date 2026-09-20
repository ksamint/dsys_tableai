/** Toggle; the only fully-rounded control. On = deep blue. */
export interface SwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  size?: "sm" | "md";
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
