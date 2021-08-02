import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidacionesService } from '../../../shared/validators/validaciones.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre:['', [Validators.required, Validators.pattern(this.val.nombreApellidoPattern)]],
    email:['', [Validators.required, Validators.pattern(this.val.emailPattern)], [this.emailValidator]],
    username:['', [Validators.required, this.val.noUserName]],
    password:['', [Validators.required, Validators.minLength(6)]],
    password2:['', [Validators.required]]
  }, {
    validators: [this.val.camposIguales('password', 'password2')]
  });

  get emailErrorMsg(): string{
    const error = this.miFormulario.get('email')?.errors;
    if (error?.required) {
      return 'El Email es obligatorio'
    } else if (error?.pattern){
      return 'El valor ingresado no tiene formato de correo'
    } else if (error?.emailTomado){
      return 'Este email ya existe'
    }
    return '';
  }

  constructor(private fb: FormBuilder,
              private val: ValidacionesService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Damar Hernandez',
      email: 'test1@test.com',
      username: 'Eldamo15',
      password: '123456',
      password2: '123456'
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
