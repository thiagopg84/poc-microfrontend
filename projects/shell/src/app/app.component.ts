import { Component, OnInit } from '@angular/core';
import { Lib1Service } from 'lib1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell';
  name!: string;

  constructor(private lib1: Lib1Service) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('test')) {
      console.log('Definindo sessionStorage no shell.');
      sessionStorage.setItem('test', 'sessionStorage definido pelo shell');
    }
    this.lib1.name.subscribe({
      next: (name) => {
        this.name = name;
      }
    })
  }

  changeName(): void {
    this.lib1.name.next('Shell mudou o nome')
  }
}
