import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  name: BehaviorSubject<string> = new BehaviorSubject<string>('teste');

  constructor() { }
}
