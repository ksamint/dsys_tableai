/** Hover/focus label on a single trigger element. */
export interface TooltipProps {
  content: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  /** ms before showing, default 150 */
  delay?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
