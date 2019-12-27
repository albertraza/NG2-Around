import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CribsService {
	constructor(private http: Http) {}

	getAllCribs() {
		return this.http.get('data/crib.json').pipe(map((res) => res.json()));
	}
}
