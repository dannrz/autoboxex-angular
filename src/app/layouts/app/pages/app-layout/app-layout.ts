import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarMenu } from '../../components/sidebar-menu/sidebar-menu';
import { Header } from '../../components/header/header';

@Component({
  templateUrl: './app-layout.html',
  imports: [SidebarModule, SidebarMenu, Header, RouterOutlet],
})
export class AppLayout { }