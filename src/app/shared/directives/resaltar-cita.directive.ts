import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltarCita]',
  standalone: true
})
export class ResaltarCitaDirective {

  constructor(private el: ElementRef) {

    this.el.nativeElement.style.backgroundColor = '#fff3cd';

  }

}