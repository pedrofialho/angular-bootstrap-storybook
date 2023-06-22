import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ngbd-accordion',
	standalone: true,
	imports: [CommonModule, NgbAccordionModule],
	templateUrl: './accordion.html',
})
export class NgbdAccordion {
	panels = ['First', 'Second', 'Third'];
}
