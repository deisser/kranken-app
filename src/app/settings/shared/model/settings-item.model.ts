export class SettingsItem {
	public icon: string;
	constructor(public text: string, private iconCode: number, public hasSwitch?: boolean) {
		this.icon = String.fromCharCode(this.iconCode);
	}
}
