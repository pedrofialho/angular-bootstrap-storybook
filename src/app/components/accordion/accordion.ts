import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'accordion',
	standalone: true,
	imports: [CommonModule, NgbAccordionModule],
	templateUrl: './accordion.html',
})
export class AccordionComponent {
	panels = ['First', 'Second', 'Third'];
}
