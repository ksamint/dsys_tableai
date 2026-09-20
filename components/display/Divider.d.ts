/** Hairline rules: full line, 48px accent mark (deep blue or gold), or vertical separator. */
export interface DividerProps {
  variant?: "line" | "strong" | "accent" | "gold";
  vertical?: boolean;
  /** Accent mark width, default 48 */
  width?: number;
  /** Margin in px */
  spacing?: number;
  align?: "left" | "center" | "right";
  style?: React.CSSProperties;
}
export declare function Divider(props: DividerProps): JSX.Element;
