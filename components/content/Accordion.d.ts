export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
  /** Optional tracked prefix, e.g. "01" */
  number?: React.ReactNode;
}
/** Hairline accordion; "+" (or chevron) indicator; one open at a time unless `multiple`. */
export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  /** Indices open on mount */
  defaultOpen?: number[];
  indicator?: "plus" | "chevron";
  style?: React.CSSProperties;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
