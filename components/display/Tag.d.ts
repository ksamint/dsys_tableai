/** Selectable / removable chip. Selected = gold border + wash. */
export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /** Shows an × remove button */
  onRemove?: () => void;
  icon?: string;
  disabled?: boolean;
  size?: "sm" | "md";
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
