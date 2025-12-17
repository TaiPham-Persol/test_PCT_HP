/**
 * Enum for menu item types
 */
export enum MenuItemType {
  SIMPLE = 'simple',
  DROPDOWN = 'dropdown',
}

/**
 * Interface for menu item
 */
export interface MenuItem {
  type: MenuItemType;
  label: string;
  hasArrow?: boolean;
  href?: string;
  subItems?: Array<{
    label: string;
    hasArrow?: boolean;
    href: string;
  }>;
}
