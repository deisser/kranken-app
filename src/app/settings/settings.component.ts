import { Component, OnInit } from '@angular/core';
import { SettingsItem } from './shared/model/settings-item.model';

@Component({
	selector: 'Settings',
	moduleId: module.id,
	templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
	constructor() {
		// Use the constructor to inject services.
	}

	ngOnInit(): void {
		// Use the "ngOnInit" handler to initialize data for the view.
	}

	get additionalSettingsHeading() {
		return 'Weitere';
	}

	get additionalSettingsItems() {
		return [
			new SettingsItem('Hilfe', 0xf05a),
			new SettingsItem('Nutzungsbedingungen', 0xf0f6),
			new SettingsItem('Datenschutz', 0xf0f6),
			new SettingsItem('Impressum', 0xf0f6)
		];
	}

	get systemSettingsHeading() {
		return 'System';
	}

	get systemSettingsItems() {
		return [
			new SettingsItem('App zurücksetzen', 0xf05a),
			new SettingsItem('Daten nur über Wlan übertragen', 0xf0f6, true),
			new SettingsItem('Audio Feedback', 0xf0f6, true),
			new SettingsItem('Tipps zum Erfassen vor der Aufnahme anzeigen.', 0xf0f6, true),
			new SettingsItem('Sperrbildschirm', 0xf0f6, true),
			new SettingsItem('Sperrkennwort ändern', 0xf0f6),
			new SettingsItem('TouchID verwenden', 0xf0f6, true)
		];
	}
}
