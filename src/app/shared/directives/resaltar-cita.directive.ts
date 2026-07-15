import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltarCita]',
  standalone: true
})
export class ResaltarCitaDirective { /// directiva para resaltar citas.

  constructor(private el: ElementRef) {

    this.el.nativeElement.style.backgroundColor = '#ffe3cd';

  }

}