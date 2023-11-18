import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {
  courseForm: FormGroup = this.formBuilder.group({
    carnet_professor: ['', Validators.required],
    schedule: ['', Validators.required],
    size: ['', Validators.required],
    room: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

  }

  onSubmit() {
    if (this.courseForm.valid) {
      // Aquí puedes enviar los datos del formulario a tu servicio o realizar otras acciones.
      console.log(this.courseForm.value);
    }
  }
}
