/** Square icon-only button. Always provide `label`. */
export interface IconButtonProps {
  icon: string;
  /** Accessible name (also the tooltip). */
  label: string;
  variant?: "ghost" | "outline" | "primary";
  /** sm 32px · md 40px */
  size?: "sm" | "md";
  /** Pressed/selected state (gold wash) */
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
