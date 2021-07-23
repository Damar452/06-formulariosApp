import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string; 
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Damar Hernandez',
    favoritos: [
      {id: 1 , nombre: 'vallenato'},
      {id: 2 , nombre: 'regue'}
    ]
  }

  nuevaMusica: string = "";

  guardar(){
    console.log('Formulario Posteado!!!');
  }

  agregarMusica(){
    const musica: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevaMusica
    }

    this.persona.favoritos.push({...musica});
    this.nuevaMusica = "";
  }

  eliminar(indice: number){
    this.persona.favoritos.splice(indice, 1);
  }

}
