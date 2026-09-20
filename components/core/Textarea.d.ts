/** Multi-line field in the brand frame. `autoGrow` expands to `maxHeight` (chat composer). */
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "style"> {
  label?: string; hint?: string; error?: string; required?: boolean;
  rows?: number;
  autoGrow?: boolean;
  /** px, default 160 */
  maxHeight?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
