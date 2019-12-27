import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable()
export class CribsService {
	public newCribSubject = new Subject<any>();

	constructor(private http: Http) {}

	getAllCribs() {
		return this.http
			.get('data/crib.json')
			.pipe(map((res) => res.json()));
	}

	addCrib(crib: any) {
		crib.image = 'default-crib';
		this.newCribSubject.next(crib);
	}
}
