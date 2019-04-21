import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

export interface IDataItem {
	id: number;
	timestamp: Date;
	status: number;
}

@Injectable({
	providedIn: 'root'
})
export class DataService {
	private items = new Array<IDataItem>(
		{
			id: 1,
			timestamp: new Date(),
			status: 1
		},
		{
			id: 2,
			timestamp: new Date(),
			status: 2
		},
		{
			id: 3,
			timestamp: new Date(),
			status: 3
		},
		{
			id: 4,
			timestamp: new Date(),
			status: 1
		},
		{
			id: 5,
			timestamp: new Date(),
			status: 3
		},
		{
			id: 6,
			timestamp: new Date(),
			status: 2
		},
		{
			id: 7,
			timestamp: new Date(),
			status: 2
		},
		{
			id: 8,
			timestamp: new Date(),
			status: 1
		},
		{
			id: 9,
			timestamp: new Date(),
			status: 3
		},
		{
			id: 10,
			timestamp: new Date(),
			status: 3
		},
		{
			id: 11,
			timestamp: new Date(),
			status: 1
		},
		{
			id: 12,
			timestamp: new Date(),
			status: 2
		},
		{
			id: 13,
			timestamp: new Date(),
			status: 1
		},
		{
			id: 14,
			timestamp: new Date(),
			status: 3
		},
		{
			id: 15,
			timestamp: new Date(),
			status: 2
		},
		{
			id: 16,
			timestamp: new Date(),
			status: 1
		}
	);

	getItems(): Array<IDataItem> {
		return this.items;
	}

	getItem(id: number): IDataItem {
		return this.items.filter((item) => item.id === id)[0];
	}
}
