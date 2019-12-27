import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-app-listing-form',
	templateUrl: './app-listing-form.component.html',
	styleUrls: [ './app-listing-form.component.css' ]
})
export class AppListingFormComponent implements OnInit {
	propertyTypes: Array<string> = [
		'House',
		'Condo',
		'Duplex'
	];

	constructor() {}

	ngOnInit() {}

	onCribSubmit(data): void {
		console.log(data);
	}
}
