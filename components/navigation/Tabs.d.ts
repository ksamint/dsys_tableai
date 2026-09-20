/** Underline tabs; active tab carries a 1px Sundial Gold rule. */
export interface TabItem { label: React.ReactNode; value?: string; count?: number | string; disabled?: boolean; }
export interface TabsProps {
  items: TabItem[];
  value?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md";
  /** Equal-width tabs */
  stretch?: boolean;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
