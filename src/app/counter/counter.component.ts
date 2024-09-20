import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit {
  counter: number = 0;
  restard: number = 0;

    //Input-> informacion que nos provee el padre.
  @Input() title !: string ;

    //Output-> informacion del hijo al padre.
    //Sin especificar el tipo (counterEmmit): Emite datos de cualquier tipo (any).
  @Output() counterEmmit = new EventEmitter();
    //Especificando el tipo (resetCounter): Emite datos de un tipo específico
    //(en este caso void, es decir, no emite datos). + SEGURO
  @Output() resetCounter: EventEmitter<void> = new EventEmitter();
  
  ngOnInit(): void {
    //FORMAS DE GESTIOAR VALORES NULOS

    //OPCION 1- ! si estamos seguros de que counter nunca será null(-seguro)
    //this.counter= parseInt(localStorage.getItem('counter')!) || 0;

    //OPCION 2- ?? si devuelve null, se utilizará 0 como valor predeterminado(+seguro)
    //?? garantiza que siempre se usará un valor válido
    this.counter = parseInt(sessionStorage.getItem('counter') ?? '0');


    //OPCION 3- Otra forma de hacer lo mismo (- eficiente, localStorage se llama 2 veces.)
    //this.counter= (localStorage.getItem('counter') != undefined)? parseInt(localStorage.getItem('counter')!):0;
    console.log('creando componente desde ngOnInit')
  }

  setCounter(): void {
    this.counter = this.counter + 1;
    //en localStorage/sessionStorage solo puede almacenar Strings.
    sessionStorage.setItem('counter',this.counter.toString());
    this.counterEmmit.emit(this.counter);
  }
  setRestard(): void {
    this.restard = this.counter = 0;
    sessionStorage.setItem('counter', this.counter.toString());
    this.resetCounter.emit();  // Emitir evento de reinicio 
  }
}
