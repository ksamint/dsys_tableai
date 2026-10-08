/** Team / advisor card: square-cornered portrait slot (greyscale), name, tracked role, short bio. */
export interface PersonCardProps {
  name: React.ReactNode;
  role?: React.ReactNode;
  /** 2–3 lines max */
  bio?: React.ReactNode;
  /** Image URL; rendered greyscale. Omit for the hairline initial placeholder. */
  photo?: string;
  initial?: string;
  tags?: string[];
  layout?: "vertical" | "horizontal";
  style?: React.CSSProperties;
}
export declare function PersonCard(props: PersonCardProps): JSX.Element;
