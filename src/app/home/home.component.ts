import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DataService, IDataItem } from '../shared/data.service';
import { TouchGestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { View } from 'tns-core-modules/ui/page/page';
import { LayoutBase } from 'tns-core-modules/ui/layouts/layout-base';
import { Label } from 'tns-core-modules/ui/label';
import { AnimationCurve } from 'tns-core-modules/ui/enums';

@Component({
	selector: 'Home',
	moduleId: module.id,
	templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
	items: Array<IDataItem>;

	constructor(private _itemService: DataService) {}

	ngOnInit(): void {
		this.items = this._itemService.getItems();
	}

	createNewDocument() {
		console.log('create new document');
	}

	deleteDocument(item: IDataItem, view: View) {
		view
			.animate({
				translate: { x: -500, y: 0 },
				duration: 600,
				curve: AnimationCurve.easeOut
			})
			.then(() => {
				view.visibility = 'collapse';
			})
			.catch((err) => console.log('known issue'));
	}

	mapDocumentStatus(status: number) {
		switch (status) {
			case 1:
				return {
					text: 'Entwurf (noch nicht gesendet)'
				};
			case 2:
				return {
					text: 'Dokument gesendet'
				};
			case 3:
				return {
					text: 'Dokument erfolgreich übermittlet'
				};
			default:
				return {
					text: 'Status nicht bekannt'
				};
		}
	}

	onTouch(args: TouchGestureEventData) {
		if (args.action !== 'down') {
			return;
		}

		const x = args.getX();
		const y = args.getY();

		const btn = args.object as View;
		const wrapper = btn.parent as LayoutBase;

		const circle = new Label();

		const btnHeight = Number(btn.height);
		const btnWidth = Number(btn.width);

		const d = Math.max(btnHeight, btnWidth);

		circle.width = d;
		circle.height = d;
		circle.top = y - d / 2;
		circle.left = x - d / 2;
		circle.backgroundColor = 'white';
		circle.opacity = 0;

		wrapper.addChild(circle);

		circle
			.animate({
				scale: { x: 0, y: 0 },
				opacity: 0.4,
				duration: 1
			})
			.then(() => {
				circle
					.animate({
						scale: { x: 2, y: 2 },
						opacity: 0,
						duration: 500
					})
					.then(() => {
						wrapper.removeChild(circle);
					});
			});
	}
}
