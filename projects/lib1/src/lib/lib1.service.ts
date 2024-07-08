import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Lib1Service {

  name: BehaviorSubject<string> = new BehaviorSubject<string>('valor inicial');

  constructor() {
    console.log('Lib1Service construído');
  }
}
