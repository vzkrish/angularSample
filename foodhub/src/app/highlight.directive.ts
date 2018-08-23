import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef, private rendere: Renderer2) {

  }

  @HostListener('mouseover') over() {
    this.hover(true);
  }
  @HostListener('mouseout') out() {
    this.hover(false);
  }
  
  hover(status: boolean)
  {
    if (status) {
         this.rendere.setStyle(this.element.nativeElement, 'text-decoration', 'underline');
         this.rendere.setStyle(this.element.nativeElement, 'color', 'red');
    } else {
      this.rendere.setStyle(this.element.nativeElement, 'text-decoration', 'none');
    }

  }
}
