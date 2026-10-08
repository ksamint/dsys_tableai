export interface DataTableColumn {
  key: string;
  label: React.ReactNode;
  /** Right-align + tabular numerals */
  numeric?: boolean;
  /** Secondary text colour */
  muted?: boolean;
  width?: number | string;
  sortable?: boolean;
  sortValue?: (row: any) => string | number;
  render?: (row: any) => React.ReactNode;
}
/** Hairline data table: tracked uppercase header over a deep-blue rule, 1px row rules, no zebra. */
export interface DataTableProps {
  columns: DataTableColumn[];
  rows: any[];
  /** compact = 10px rows (admin); comparison = sticky, emphasised first column (benchmarks, feature matrices) */
  variant?: "default" | "compact" | "comparison";
  sortable?: boolean;
  defaultSort?: { key: string; dir: "asc" | "desc" };
  /** Row index or predicate; highlighted rows get the 8% gold wash. Use for one row at most. */
  highlightRow?: number | ((row: any, index: number) => boolean);
  caption?: React.ReactNode;
  emptyText?: React.ReactNode;
  onRowClick?: (row: any) => void;
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
