import {
	Component,
	OnInit,
	ViewChild
} from '@angular/core';
import { CribsService } from './../services/cribs.service';
import { NgForm } from '@angular/forms';
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
	@ViewChild('newCribForm', { static: false })
	newCribForm: NgForm;

	constructor(public cribsService: CribsService) {}

	ngOnInit() {}

	onCribSubmit(data: any): void {
		this.cribsService.addCrib(data);
		this.newCribForm.reset();
	}
}
