/** Tracked uppercase status label, 22px tall. */
export interface BadgeProps {
  variant?: "neutral" | "strong" | "inverse" | "gold" | "error" | "success" | "warning";
  icon?: string;
  /** Leading 6px dot */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
