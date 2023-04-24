import { Component, OnInit } from '@angular/core';
import { Lib1Service } from 'lib1';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  name: string = '';

  constructor(private lib1: Lib1Service) { }

  ngOnInit(): void {
    this.lib1.name.subscribe({
      next: (name) => {
        this.name = name;
      }
    });
    setTimeout(() => {
      console.log('lendo sessionStorage no MFE: ' + sessionStorage.getItem('test'));
    }, 1000);
  }

  changeName(): void {
    this.lib1.name.next('Sample mudou o nome');
  }
}
