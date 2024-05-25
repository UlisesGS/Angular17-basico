import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
  /*
    EL sessionStorage TE GUARDA LA INFORMACION MIENTRAS NO CIERRES EL NAVEGADOR.
    EL localStorage TE GUARDA LA INFORMACION EN EL EQUIPO, Y NO EN EL NAVEGADOR.
  */
  counter: number = 0;
  @Input() title!:string;
  @Output() counterEmmit: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
                //aca lo pasamos devuelta a number
    //this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
    this.counter = (localStorage.getItem('counter') != undefined) ? 
      parseInt(localStorage.getItem('counter')!) : 0;
  }


  setCounter(): void {
    this.counter = this.counter + 1;
                              //hay que pasarlo de number a string
    //sessionStorage.setItem('counter', this.counter.toString());
    localStorage.setItem('counter', this.counter.toString());
    this.counterEmmit.emit(this.counter);
  }
}
