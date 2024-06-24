import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[externalLink]',
  standalone: true
})
export class ExternalLinkDirective {

    @Input('externalLink') externalUrl: string="";

    @HostListener('click', ['$event'])
    onClick(event: Event): void {
        event.preventDefault();
        window.open(this.externalUrl, '_blank');
    }

    constructor() { }

}
