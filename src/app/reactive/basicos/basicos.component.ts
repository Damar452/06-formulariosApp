import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit  {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(2)]],
    precio: [ , [Validators.required, Validators.min(0)] ],
    existencias: [ , [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit (){
    this.miFormulario.reset({
      nombre: 'Mesa',
      precio: 2000
    })
  }

  campoInvalido(campo: string){
    return this.miFormulario.controls[campo].invalid && this.miFormulario.controls[campo].touched;
  }


  guardar(){

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

}
