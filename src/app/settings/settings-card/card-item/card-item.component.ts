import { Component, Input } from '@angular/core';

@Component({
	selector: 'SettingsCardItem',
	moduleId: module.id,
	templateUrl: './card-item.component.html'
})
export class SettingsCardItemComponent {
	@Input('cardText') cardText: string;
	@Input('cardIcon') cardIcon: string;
	@Input('hasSwitch') hasSwitch: boolean = false;

	clicked: boolean = false;

	constructor() {}
}
