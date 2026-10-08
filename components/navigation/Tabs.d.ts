/** Underline tabs; active tab carries a 1px Sundial Gold rule. Roving tabindex; ←/→/Home/End move and select. */
export interface TabItem { label: React.ReactNode; value?: string; count?: number | string; disabled?: boolean;
  /** id of the controlled tabpanel (aria-controls) */ panelId?: string;
  /** id for this tab, so the panel can use aria-labelledby */ tabId?: string; }
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
