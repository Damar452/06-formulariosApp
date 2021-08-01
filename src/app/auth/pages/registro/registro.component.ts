import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesService } from '../../../shared/validators/validaciones.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.val.nombreApellidoPattern)]],
    email:['', [Validators.required, Validators.pattern(this.val.emailPattern)]],
    username:['', [Validators.required, this.val.noUserName]],
    password:['', [Validators.required, Validators.minLength(6)]],
    password2:['', [Validators.required]]
  }, {
    validators: [this.val.camposIguales('password', 'password2')]
  })

  constructor(private fb: FormBuilder,
              private val: ValidacionesService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Damar Hernandez',
      email: 'test@test.com',
      username: 'Eldamo15'
    })
  }

  campoInvalido(campo:string){
   return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
