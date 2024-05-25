import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-app-17';
 // PARA INICIALIZQAR UN ARRAY users!:string[];
  users:string[] = ['pepe','pupu','popo']
  visible: boolean = false;
  subTitle='CONTADOR';
  counter!: number;

  ngOnInit(): void {
    this.counter = (localStorage.getItem('counter') != undefined) ?
      parseInt(localStorage.getItem('counter')!) : 0;
  }

  setVisible(): void{
                  /* ESTA PREGUNTANDO SI VISIBLE ES TRUE LO PASA A FALSE, Y SI ES FALSE LO PASA A TRUE*/
    this.visible = this.visible? false: true;
  }

  setCounter(event:number): void {
    this.counter = event;
  }
}
