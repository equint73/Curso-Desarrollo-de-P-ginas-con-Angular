
/* Autor: Ricardo Ariel Anariba */
import { Directive, ElementRef, inject, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { incrementTag } from './store/tracking.actions';

@Directive({
  selector: '[appRegistroClicks]',
  standalone: true
})
export class RegistroClicksDirective implements OnInit, OnDestroy {
  private el = inject(ElementRef<HTMLElement>);
  private store = inject(Store);
  private unlisten?: () => void;

  ngOnInit() {
    this.unlisten = this.el.nativeElement.addEventListener('click', () => {
      const tag = this.el.nativeElement.getAttribute('data-tracking-tag') || 'sin-tag';
      this.store.dispatch(incrementTag({ tag }));
    });
  }
  ngOnDestroy() { this.unlisten?.(); }
}
