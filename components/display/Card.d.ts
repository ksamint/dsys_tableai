/**
 * Square, hairline-bordered card. "tile" variant lives inside TileGrid (1px gaps painted by the border colour) — the
 * website's signature layout for thresholds, pillars, hubs and partners.
 */
export interface CardProps {
  variant?: "outline" | "tile" | "dark" | "dashed" | "surface";
  /** Hover lift + darker border (or surface tint for tiles) */
  interactive?: boolean;
  /** px, default 32 */
  padding?: number | string;
  /** Tracked uppercase label */
  eyebrow?: React.ReactNode;
  /** "01", "X1" … shown top-left in tracked type */
  number?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** Bottom rule + tracked text, pinned to the bottom */
  footer?: React.ReactNode;
  /** Show the arrow-up-right glyph on hover */
  arrow?: boolean;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
export interface TileGridProps {
  /** Fixed column count (ignored when minWidth is set) */
  columns?: number;
  /** Responsive auto-fit minimum tile width in px */
  minWidth?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function TileGrid(props: TileGridProps): JSX.Element;
