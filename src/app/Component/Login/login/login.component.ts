import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { AuthService } from 'src/app/Services/auth.service';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
//import * as moment from 'moment';
@Component({
  selector: 'app-add-account',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  date: any;
  hour: any;
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

 

  constructor(private router: Router,public readonly swalTargets: SwalPortalTargets,private formBuilder: FormBuilder, private authService:AuthService) { }

  ngOnInit() {

  }
  onSubmit() {
  
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 1700,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    if (this.loginForm.valid) {
      const usernameControl = this.loginForm.get('username');
      const passwordControl = this.loginForm.get('password');
  
      if (usernameControl && passwordControl) {
        const formData = {
          username: usernameControl.value,
          password: passwordControl.value
        };
  
        this.authService.login(formData).subscribe((result) => {
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          })
            this.router.navigate(['/home'])
        },(error) =>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Malas credenciales',
          });
              });
        
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ingresa los datos requeridos',
      });
    }
  }
  
}

