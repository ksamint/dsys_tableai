/** Native select in the brand frame with a hairline chevron. */
export interface SelectOption { value: string; label: string; }
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size" | "style"> {
  label?: string; hint?: string; error?: string; required?: boolean;
  options: (SelectOption | string)[];
  /** Disabled first option shown when value is empty */
  placeholder?: string;
  size?: "sm" | "md";
  disabled?: boolean;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
