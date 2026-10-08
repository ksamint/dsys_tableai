/** Pull quote: large light type, gold 48px hairline above, tracked attribution. */
export interface QuoteProps {
  children: React.ReactNode;
  author?: React.ReactNode;
  role?: React.ReactNode;
  /** Gold hairline above the quote (counts toward the ~8% gold budget) */
  accent?: boolean;
  size?: "md" | "lg";
  align?: "left" | "center";
  style?: React.CSSProperties;
}
export declare function Quote(props: QuoteProps): JSX.Element;
