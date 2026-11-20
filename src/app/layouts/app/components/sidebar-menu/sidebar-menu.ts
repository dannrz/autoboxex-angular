import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Plus } from '@primeicons/angular/plus';
import { ChevronDown } from '@primeicons/angular/chevron-down';
import { EllipsisV } from '@primeicons/angular/ellipsis-v';
import { PIcon } from '@primeicons/angular/p-icon';
import { NavGroup, NavItem, Roles } from '../../interfaces';
import { MENU_BY_ROLE } from '../../constants/Menu';

@Component({
  imports: [AvatarModule, SidebarModule, ButtonModule, Plus, ChevronDown, EllipsisV, PIcon, RouterLink, RouterLinkActive],
  templateUrl: './sidebar-menu.html',
  selector: 'app-sidebar-menu',
  host: { style: 'display: contents' }
})
export class SidebarMenu implements OnInit, OnDestroy {
  protected readonly navGroups: NavGroup[] = MENU_BY_ROLE[Roles.Admin];
  private router = inject(Router);

  protected isMobile = signal<boolean>(false);
  protected open = signal<boolean>(false);

  private currentUrl = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  private mql?: MediaQueryList;
  private mqlListener?: (e: MediaQueryListEvent) => void;

  public ngOnInit() {
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

  public ngOnDestroy() {
    this.mql?.removeEventListener('change', this.mqlListener!);
  }

  public hasActiveSub(item: NavItem): boolean {
    const url = this.currentUrl();
    return !!item.subItems?.some((s) => url === s.route || url.startsWith(`${s.route}/`) || url.startsWith(`${s.route}?`));
  }
}