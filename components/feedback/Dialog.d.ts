/** Modal panel on a deep-blue scrim. */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  eyebrow?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned action buttons */
  actions?: React.ReactNode;
  /** px, default 480 */
  width?: number;
  closeButton?: boolean;
  style?: React.CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
export interface ConfirmDialogProps {
  open: boolean; onClose?: () => void; onConfirm?: () => void;
  title?: React.ReactNode; description?: React.ReactNode;
  confirmLabel?: string; cancelLabel?: string;
  danger?: boolean; loading?: boolean;
}
export declare function ConfirmDialog(props: ConfirmDialogProps): JSX.Element;
