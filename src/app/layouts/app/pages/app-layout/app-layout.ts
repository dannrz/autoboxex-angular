import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarMenu } from '../../components/sidebar-menu/sidebar-menu';
import { Header } from '../../components/header/header';

@Component({
  templateUrl: './app-layout.html',
  imports: [SidebarModule, SidebarMenu, Header],
})
export class AppLayout { }