/**
 * Single-line text field in the brand hairline frame. Focus = gold border + gold-mist wash; error = red border.
 * @startingPoint section="Forms" subtitle="Text field with label, hint, error, icon" viewport="700x220"
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "style"> {
  /** Tracked uppercase label above the field */
  label?: string;
  hint?: string;
  /** Error message; also turns the frame red */
  error?: string;
  required?: boolean;
  /** Leading Lucide icon */
  icon?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  /** sm 32px · md 40px */
  size?: "sm" | "md";
  disabled?: boolean;
  /** Frame style */
  style?: React.CSSProperties;
  /** Outer label/container style (e.g. flex: 1) */
  containerStyle?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
export interface FieldLabelProps { label?: string; hint?: string; error?: string; required?: boolean; htmlFor?: string; children?: React.ReactNode; containerStyle?: React.CSSProperties; }
/** Label + hint/error wrapper shared by Input, Textarea and Select. */
export declare function FieldLabel(props: FieldLabelProps): JSX.Element;
