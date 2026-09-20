/** Radio ring with a Sundial Gold dot when selected. */
export interface RadioProps {
  checked?: boolean;
  onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
export interface RadioGroupProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  options: { value: string; label: React.ReactNode; description?: React.ReactNode; disabled?: boolean }[];
  direction?: "column" | "row";
  gap?: number;
  style?: React.CSSProperties;
}
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
