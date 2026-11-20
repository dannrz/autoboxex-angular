import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Router, provideRouter } from '@angular/router';
import { SidebarMenu } from './sidebar-menu';
import { NavItem } from '../../interfaces';

@Component({ template: '' })
class Dummy { }

describe('SidebarMenu', () => {
  let component: SidebarMenu;
  let fixture: ComponentFixture<SidebarMenu>;

  beforeEach(async () => {
    window.matchMedia ??= ((query: string) => ({ matches: false, media: query, addEventListener() { }, removeEventListener() { } })) as unknown as typeof window.matchMedia;

    await TestBed.configureTestingModule({
      imports: [SidebarMenu],
      providers: [provideRouter([{ path: '**', component: Dummy }])],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render menu items as router links', () => {
    const links: HTMLAnchorElement[] = Array.from(fixture.nativeElement.querySelectorAll('a[href]'));
    const hrefs = links.map((a) => a.getAttribute('href'));
    expect(hrefs).toContain('/home');
    expect(hrefs).toContain('/analytics/reports');
  });

  it('should mark the group of the current sub route as active', async () => {
    const analytics: NavItem = { icon: 'chart-bar', label: 'Analytics', subItems: [{ label: 'Reports', route: '/analytics/reports' }] };
    expect(component.hasActiveSub(analytics)).toBe(false);

    await TestBed.inject(Router).navigateByUrl('/analytics/reports');

    expect(component.hasActiveSub(analytics)).toBe(true);
    expect(component.hasActiveSub({ icon: 'folder', label: 'Documents', subItems: [{ label: 'Shared', route: '/documents/shared' }] })).toBe(false);
  });
});
