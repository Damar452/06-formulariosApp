import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  inicial = {
    producto: 'disco solido',
    precio: 200000,
    existencias: 12
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean {
    return this.miFormulario?.controls.producto?.invalid && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean {
    this.miFormulario?.controls.precio?.setErrors(null);
    return this.miFormulario?.controls.precio?.touched && this.miFormulario?.controls.precio?.value < 0  ;
  }

  guardar(){
    console.log("Posteo Correcto");
    this.miFormulario.resetForm({
      precio: 10,
      existencias: 10 
    });
  }

}
