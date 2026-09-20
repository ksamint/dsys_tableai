/** Chat input: auto-growing textarea + deep-blue send button. Enter sends, Shift+Enter breaks. */
export interface ChatComposerProps {
  onSend?: (text: string) => void;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  /** Empty-state prompt chips; clicking sends immediately */
  suggestions?: string[];
  /** Controlled value */
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function ChatComposer(props: ChatComposerProps): JSX.Element;
