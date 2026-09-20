/**
 * Website header: A2A mark + spaced wordmark, tracked links, bordered EN/中 toggle. Recreated from Navbar.tsx.
 * @startingPoint section="Navigation" subtitle="Site header with language toggle" viewport="1200x80"
 */
export interface NavItem { href: string; label: React.ReactNode; }
export interface NavBarProps {
  /** e.g. "assets/logo/tableai-a2a-logo-transparent.png" */
  logoSrc?: string;
  brand?: string;
  items: NavItem[];
  activeHref?: string;
  /** Intercepts link clicks (SPA routing) */
  onNavigate?: (href: string) => void;
  lang?: "zh" | "en";
  onToggleLang?: () => void;
  /** Scrolled state: white 70% + blur + hairline */
  glass?: boolean;
  fixed?: boolean;
  /** 64 (mobile) / 80 (desktop) */
  height?: number;
  maxWidth?: number;
  /** Extra right-side content (e.g. Admin link) */
  right?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
