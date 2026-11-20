export interface NavSubItem {
    label: string;
    route: string;
}

export interface NavItem {
    icon: string;
    label: string;
    badge?: string;
    /** Destination URL for items without sub-items. */
    route?: string;
    /** When present, the item acts as a collapsible group instead of a link. */
    subItems?: NavSubItem[];
}

export interface NavGroup {
    label: string;
    action?: boolean;
    items: NavItem[];
}