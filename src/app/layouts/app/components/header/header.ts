import { Component } from '@angular/core';
import { Sidebar } from '@primeicons/angular/sidebar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  imports: [Sidebar, SidebarModule, ButtonModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header { }
