import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    favoritos: this.fb.array([
      ['Vallenato', Validators.required],
      ['Reggae', Validators.required]
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }



   agregarFavorito(){
     if (this.nuevoFavorito.invalid) {
       return;
     }

    //  this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
     this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
     this.nuevoFavorito.reset();
   }

    borrarFavorito(index: number){
      this.favoritosArr.removeAt(index);
    }

  guardar(){
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

  validar(input: string){
    return this.miFormulario.controls[input].errors && this.miFormulario.controls[input].touched;
  }

}
