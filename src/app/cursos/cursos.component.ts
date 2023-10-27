import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent {
 
   // ngfor con tarjeta de boostrap en el html

 
  cursos :[
    {
      id: "1";
      nombre: "Curso 1";
      duracion: "5 meses";
      descripcion: "Curso de Python";
      imagen: "assets/img/java.jpg";
    },

    {
      id: "2";
      nombre: "Curso 2";
      duracion: "6 meses";
      descripcion: "Curso de Java";
      imagen: "assets/img/python.jpg";
    }
  ] | undefined;


   mostrarCard:boolean = true;
/*
  agregarCurso() {
    // Agrega un nuevo curso al array cursos
    this.cursos.push({
      "id": '',
      "nombre": 'Nuevo Curso',
      "duracion": 'X semanas',
      "descripcion": 'Descripción del nuevo curso',
      imagen":''
    });
  }
/*
  toggleCard() {
    this.mostrarCard = !this.mostrarCard;
  }
*/

 
}