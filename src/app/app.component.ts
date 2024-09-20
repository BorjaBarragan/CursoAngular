import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title: string = 'Hola mundo angular desde componente!';

  subTitle : string = 'Subtitulo del PADRE al hijo';

  users: string[] = ['Pepe ','Maria ','Borja ','Andrés'];
  //users: string[] = [];--> Inicializa users como un arreglo vacío desde el principio.
  //users?: string[];--> users es opcional y puede ser un arreglo o undefined.
  //users!: string[];--> users no se inicializa inmediatamente, pero el desarrollador asegura que 

  visible : boolean = false;
  visiblee : boolean = false;

  counter : number = 0;

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter') ?? '0');
  }

  setVisible():void{
    this.visible = this.visible? false:true;
    console.log('hemos hecho click en setVisible');
  }
//Es otra forma más reducida de hacer lo mismo que lo anterior.
  setVisible2(): void {
    this.visiblee = !this.visiblee;
    console.log('hemos hecho click en setVisible2');
  }
  setCounter(counter:number):void{
    this.counter = counter
  }
  resetCounter(): void {
    this.counter = 0;
  }
}
