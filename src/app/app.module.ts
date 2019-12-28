import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';
import { AppListingFormComponent } from './app-listing-form/app-listing-form.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
	declarations: [
		AppComponent,
		CribListingComponent,
		CribCardComponent,
		AppListingFormComponent,
		SortByPipe
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule,
		HttpModule
	],
	providers: [ CribsService, UtilService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
