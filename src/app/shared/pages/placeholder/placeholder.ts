import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  template: `
    <h1 class="text-xl font-semibold">{{ title() }}</h1>
    <p class="text-surface-500">Página en construcción.</p>
  `,
})
export class Placeholder {
  protected title = toSignal(inject(ActivatedRoute).title, { initialValue: '' });
}
