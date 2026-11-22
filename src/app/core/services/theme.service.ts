import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

const STORAGE_KEY = 'autoboxex-theme';
export const DARK_MODE_CLASS = 'app-dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);

  readonly isDark = signal<boolean>(this.getInitialPreference());

  constructor() {
    this.document.documentElement.classList.toggle(DARK_MODE_CLASS, this.isDark());
    effect(() => {
      const dark = this.isDark();
      this.document.documentElement.classList.toggle(DARK_MODE_CLASS, dark);
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light');
    });
  }

  toggle(): void {
    this.isDark.update((dark) => !dark);
  }

  private getInitialPreference(): boolean {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored === 'dark';
    return this.document.defaultView?.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
  }
}
