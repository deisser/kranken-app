import { Component, Input } from '@angular/core';
import { SettingsItem } from '../shared/model/settings-item.model';

@Component({
	selector: 'SettingsCard',
	moduleId: module.id,
	templateUrl: './settings-card.component.html'
})
export class SettingsCardComponent {
	@Input('settingsItems') settingsItems: SettingsItem[];
	@Input('settingsHeading') settingsHeading: string;

	constructor() {}
}
