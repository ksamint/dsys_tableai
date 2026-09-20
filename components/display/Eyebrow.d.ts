/** Tracked uppercase section label — 12px / 0.3em. Optional "01 —" number and 48px accent hairline. */
export interface EyebrowProps {
  children?: React.ReactNode;
  /** e.g. "01" → "01 — Label" */
  number?: string;
  /** Draw the 48px hairline before the text */
  line?: boolean;
  /** Tint the hairline Sundial Gold */
  gold?: boolean;
  as?: "p" | "span" | "div" | "h2" | "h3";
  align?: "left" | "center";
  color?: string;
  style?: React.CSSProperties;
}
export declare function Eyebrow(props: EyebrowProps): JSX.Element;
