/** Transient notice; leading glyph tinted by tone (success pine, warning ochre, error red). */
export interface ToastProps {
  variant?: "info" | "success" | "warning" | "error" | "loading";
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  onDismiss?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
export interface ToastStackProps { children?: React.ReactNode; position?: "bottom-right" | "bottom-left" | "top-right" | "top-center"; style?: React.CSSProperties; }
export declare function ToastStack(props: ToastStackProps): JSX.Element;
