import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommServiceService {

  message: BehaviorSubject<string> = new BehaviorSubject('');
    currentMessage = this.message.asObservable();

  constructor() { }
  change(msg: string): void {
      this.message.next(msg);
  }
}
