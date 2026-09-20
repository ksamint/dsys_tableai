/** Large light numeral with tracked label. `accent` = gold value for the one key figure. */
export interface StatProps {
  value: number | string;
  suffix?: string;
  label?: React.ReactNode;
  description?: React.ReactNode;
  accent?: boolean;
  /** Animate from 0 over 2s (numeric values only) */
  countUp?: boolean;
  size?: "sm" | "md" | "lg";
  align?: "left" | "center";
  style?: React.CSSProperties;
}
export declare function Stat(props: StatProps): JSX.Element;
