export interface StepItem {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Small tracked line under the description, e.g. a duration */
  meta?: React.ReactNode;
  /** Override "01", "02"… */
  number?: React.ReactNode;
}
/** Numbered process / ladder with hairline connectors; the active step carries the gold hairline. */
export interface StepsProps {
  items: StepItem[];
  /** 0-based active step; omit for a static (all-ink) process */
  active?: number;
  orientation?: "horizontal" | "vertical";
  numbered?: boolean;
  style?: React.CSSProperties;
}
export declare function Steps(props: StepsProps): JSX.Element;
