/**
 * TABLE AI button. Deep-blue structure by default; "cta" is the single Sundial Gold conversion action allowed per view.
 */
export interface ButtonProps {
  /** primary = deep blue fill · cta = Sundial Gold fill (one per view) · outline = deep-blue hairline · ghost · link · danger */
  variant?: "primary" | "cta" | "outline" | "ghost" | "link" | "danger";
  /** sm 32px · md 40px · lg 56px (website hero CTA) */
  size?: "sm" | "md" | "lg";
  /** Leading Lucide icon name */
  icon?: string;
  /** Trailing Lucide icon name, e.g. "arrow-right" */
  iconRight?: string;
  loading?: boolean;
  disabled?: boolean;
  /** Full-width */
  block?: boolean;
  /** Render as anchor */
  href?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
