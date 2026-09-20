/** Minimal deep-blue skeleton with a slow opacity pulse; no shimmer. */
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  circle?: boolean;
  /** Render N stacked lines (last one 60% wide) */
  lines?: number;
  gap?: number;
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
