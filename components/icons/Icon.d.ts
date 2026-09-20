/**
 * Stroke icon from the Lucide set (the set the TABLE AI website uses). 1.5px stroke, inherits currentColor.
 */
export interface IconProps {
  /** Lucide icon name, e.g. "arrow-right", "sparkles", "globe". See ICON_NAMES. */
  name: "arrow-left" | "arrow-right" | "arrow-up-right" | "bell" | "bot" | "check" | "chevron-down" | "chevron-right" | "circle-alert" | "circle-check" | "copy" | "cpu" | "database" | "external-link" | "eye" | "file-text" | "globe" | "handshake" | "info" | "languages" | "layout-dashboard" | "loader-circle" | "lock" | "log-out" | "mail" | "map-pin" | "menu" | "minus" | "pencil" | "plus" | "search" | "send" | "settings" | "shield" | "sparkles" | "trash" | "user" | "users" | "x" | "zap";
  /** Pixel size (width = height). Default 16. */
  size?: number;
  /** Default 1.5 — the brand's hairline weight. */
  strokeWidth?: number;
  /** Default currentColor. */
  color?: string;
  /** Accessible title; omit for decorative icons. */
  title?: string;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
export declare const ICON_NAMES: string[];
