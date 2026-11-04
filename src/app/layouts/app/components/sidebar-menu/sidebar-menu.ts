import { Component, signal } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Plus } from '@primeicons/angular/plus';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { EllipsisV } from '@primeicons/angular/ellipsis-v';
import { PIcon } from '@primeicons/angular/p-icon';

interface NavItem {
  icon: string;
  label: string;
  isActive?: boolean;
  badge?: string;
  subItems?: { label: string; isActive?: boolean }[];
}

interface NavGroup {
  label: string;
  action?: boolean;
  items: NavItem[];
}

@Component({
  imports: [AvatarModule, SidebarModule, ButtonModule, Plus, ChevronDown, EllipsisV, PIcon],
  templateUrl: './sidebar-menu.html',
  selector: 'app-sidebar-menu',
  host: { style: 'display: contents' }
})
export class SidebarMenu {
  isMobile = signal<boolean>(false);

  open = signal<boolean>(false);

  private mql?: MediaQueryList;

  private mqlListener?: (e: MediaQueryListEvent) => void;

  navGroups: NavGroup[] = [
    {
      label: 'Navigation',
      items: [
        { icon: 'home', label: 'Home', isActive: true },
        { icon: 'inbox', label: 'Inbox', badge: '12' },
        { icon: 'search', label: 'Search' },
        { icon: 'bell', label: 'Notifications', badge: '3' }
      ]
    },
    {
      label: 'Projects',
      action: true,
      items: [
        { icon: 'chart-bar', label: 'Analytics', subItems: [{ label: 'Overview', isActive: true }, { label: 'Reports' }, { label: 'Real-time' }] },
        { icon: 'users', label: 'Team' },
        { icon: 'calendar', label: 'Calendar' },
        { icon: 'folder', label: 'Documents', subItems: [{ label: 'Shared' }, { label: 'Private' }, { label: 'Archived' }] }
      ]
    },
    {
      label: 'Billing',
      items: [
        { icon: 'credit-card', label: 'Payments' },
        { icon: 'shopping-cart', label: 'Orders' },
        { icon: 'star', label: 'Subscriptions' }
      ]
    }
  ];

  ngOnInit() {
    if (typeof window === 'undefined') return;
    this.mql = window.matchMedia('(max-width: 1023px)');
    this.isMobile.set(this.mql.matches);
    this.open.set(false);
    this.mqlListener = (e) => {
      this.isMobile.set(e.matches);
      this.open.set(false);
    };
    this.mql.addEventListener('change', this.mqlListener);
  }

  ngOnDestroy() {
    this.mql?.removeEventListener('change', this.mqlListener!);
  }

  hasActiveSub(item: NavItem): boolean {
    return !!item.subItems?.some((s) => s.isActive);
  }
}