import { Component, inject } from '@angular/core';
import { Sidebar } from '@primeicons/angular/sidebar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Moon } from '@primeicons/angular/moon';
import { Sun } from '@primeicons/angular/sun';
import { ThemeService } from '@core/services/theme.service';

@Component({
  imports: [Sidebar, SidebarModule, ButtonModule, Moon, Sun],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  protected readonly theme = inject(ThemeService);
}