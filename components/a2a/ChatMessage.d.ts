/**
 * One turn in an agent / human thread. agent = left surface bubble with sparkles avatar; human = right deep-blue bubble;
 * system = centered hairline note.
 * @startingPoint section="A2A" subtitle="Agent / human / system chat turns" viewport="700x320"
 */
export interface ChatMessageProps {
  role?: "agent" | "human" | "system";
  children?: React.ReactNode;
  /** Tracked eyebrow above the bubble, e.g. "AGENT · SETTLEMENT" */
  meta?: React.ReactNode;
  time?: React.ReactNode;
  /** Show a spinner instead of content */
  pending?: boolean;
  /** Custom avatar node */
  avatar?: React.ReactNode;
  maxWidth?: string | number;
  style?: React.CSSProperties;
}
export declare function ChatMessage(props: ChatMessageProps): JSX.Element;
