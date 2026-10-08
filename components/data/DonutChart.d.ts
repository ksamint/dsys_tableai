import type { ChartDatum } from "./BarChart";
/** Thin-ring donut with legend: deep-blue ramp, one gold highlight segment, light centre figure. */
export interface DonutChartProps {
  data: ChartDatum[];
  /** Index or label of the single segment to mark in gold */
  highlight?: number | string;
  size?: number;
  thickness?: number;
  centerValue?: React.ReactNode;
  centerLabel?: React.ReactNode;
  format?: (v: number) => React.ReactNode;
  unit?: string;
  legend?: boolean;
  style?: React.CSSProperties;
}
export declare function DonutChart(props: DonutChartProps): JSX.Element;
