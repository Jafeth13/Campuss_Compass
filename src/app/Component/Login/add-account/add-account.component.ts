import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import * as moment from 'moment';
import { AuthService } from 'src/app/Services/auth.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  date: any;
  hour: any;
  accountForm: FormGroup = this.formBuilder.group({
   
    name: ['', Validators.required],
    lastname: ['', Validators.required],
    birth: '2023-11-01T22:20:52.623Z',
    email: ['', Validators.required],
    userName:['',Validators.required],
    password:['',Validators.required],
    passwordConfirm:['',Validators.required],
    role:'estudiante',
   
    
  });

  constructor(private router: Router,private formBuilder: FormBuilder,private authService:AuthService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.authService.add(this.accountForm.value).subscribe(
      result => {     
        Swal.fire(
          'Good job!',
          'User added sucessfully!',
          'success'
        )  
        this.router.navigate(['/'])

      },
      error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  
    console.log(this.accountForm.value);
  }
  selectDate(type: string, event: MatDatepickerInputEvent<Date>) {
    this.date = moment(event.value).format('YYYY-MM-DD');
  }
  selectHour() {
    this.hour = (<HTMLInputElement>document.getElementById('time')).value;
  }
}

