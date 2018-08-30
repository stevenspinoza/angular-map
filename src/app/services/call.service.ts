import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject} from 'rxjs';


@Injectable()
export class CallService {
	private subject = new Subject<any>();

	sendClickCall(place: any) {
	    this.subject.next({ text: place });
	}

	getClickCall(): Observable<any> {
	    return this.subject.asObservable();
	}
}

