export interface ChartDatum { label: string; value: number; color?: string; }
/** Minimal bar chart: deep-blue bars, one gold highlight, tracked caps labels, no gridlines. */
export interface BarChartProps {
  data: ChartDatum[];
  orientation?: "horizontal" | "vertical";
  /** Index, label, or predicate of the single bar to mark in gold */
  highlight?: number | string | ((d: ChartDatum, i: number) => boolean);
  max?: number;
  format?: (v: number) => React.ReactNode;
  unit?: string;
  /** Vertical only, px */
  height?: number;
  barThickness?: number;
  style?: React.CSSProperties;
}
export declare function BarChart(props: BarChartProps): JSX.Element;
